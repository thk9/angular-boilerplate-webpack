/**
 * @description - HMR bridge manager
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import { omit } from 'lodash';
import { Observable } from '@bornkiller/observable';

import { analyzeModalIdentity, resolveModalClass } from './hmr.warrior';
import { updateModalTemplate, updateModalController, updateViewTemplate, updateViewController } from './hmr.worker';

/* eslint-disable angular/document-service, angular/angularelement */
export /* @ngInject */ function HMRProvider() {
  const Storage = new Map();
  const ModalStorage = new Map();

  this.register = register;
  this.storage = Storage;
  this.modalStorage = ModalStorage;

  // name = state.name + views.name + template / controller
  function register(name) {
    Storage.set(name, new Observable());
  }

  this.$get = ['$injector', '$compile', '$state', function ($injector, $compile, $state) {
    return {
      notify,
      update
    };

    /**
     * @description - HMR modal implement
     *
     * @param hotModalModule
     * @param {string} hotModalType - template or controller
     */
    function update(hotModalModule, hotModalType) {
      if (hotModalType == 'template') {
        let modalTemplateIdentity = analyzeModalIdentity(hotModalModule);

        ModalStorage.set(modalTemplateIdentity, {template: hotModalModule});
        updateModalTemplate($compile, hotModalModule);
      } else {
        // update modal controller options
        let modalControllerIdentity = analyzeModalIdentity(hotModalModule);

        ModalStorage.set(modalControllerIdentity, {controller: hotModalModule});
        updateModalController($injector, hotModalModule);
      }
    }

    // HMR route implement
    function notify(name, hotModule) {
      let observable = Storage.get(name);
      let [stateName, viewName, hotModuleType] = name.split('_');

      // 需要判定匹配目标是否处于激活状态
      if ($state.includes(stateName)) {
        hotModuleType === 'template' ? updateViewTemplate($compile, viewName, hotModule) : updateViewController($injector, viewName, hotModule);
      }

      // 此处修改router声明, reload的时候才会生效,使之符合HMR原则
      observable.next(hotModule);
    }
  }];
}

export /* @ngInject */ function HMRStateProviderConfig($stateProvider, $hmrProvider) {
  $stateProvider.decorator('views', function (state, $delegate) {
    let target = {};
    let views = $delegate(state);

    angular.forEach(views, (config, viewName) => {
      let middleware = omit(config, ['template', 'controller']);
      let templateAccessorToken = `${state.name}_${viewName}_template`;
      let controllerAccessorToken = `${state.name}_${viewName}_controller`;
      let mirror = {
        template: config.template,
        controller: config.controller
      };

      $hmrProvider.register(templateAccessorToken);
      $hmrProvider.register(controllerAccessorToken);

      $hmrProvider.storage.get(templateAccessorToken).subscribe(template => {
        mirror.template = template;
      });

      $hmrProvider.storage.get(controllerAccessorToken).subscribe(controller => {
        mirror.controller = controller;
      });

      middleware.templateProvider = function () {
        return mirror.template;
      };

      middleware.controllerProvider = function () {
        return mirror.controller;
      };

      target[viewName] = middleware;
    });

    return target;
  });
}

export /* @ngInject */ function HMRModalDecoratorConfig($provide, $hmrProvider) {
  $provide.decorator('$uibModal', ['$delegate', function ($delegate) {
    return {
      ...$delegate,
      open: HMRModalOpen
    };

    function HMRModalOpen(options) {
      let {template, controller, windowClass} = options;
      let modalTemplateIdentity = analyzeModalIdentity(template);
      let modalControllerIdentity = analyzeModalIdentity(controller);
      let hmrModalWindowClass = resolveModalClass(windowClass, [modalTemplateIdentity, modalControllerIdentity]);

      let hmrModalTemplate = $hmrProvider.modalStorage.get(modalTemplateIdentity) || {template};
      let hmrModalController = $hmrProvider.modalStorage.get(modalControllerIdentity) || {controller};

      options = {...options, ...hmrModalTemplate, ...hmrModalController, ...hmrModalWindowClass};

      return $delegate.open(options);
    }
  }]);
}