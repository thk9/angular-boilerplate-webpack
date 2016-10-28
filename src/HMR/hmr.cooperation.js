/**
 * @description - HMR bridge manager
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import omit from 'lodash/omit';
import has from 'lodash/has';
import { Subject } from 'rxjs/Subject';

/* eslint-disable angular/document-service, angular/angularelement */
export /* @ngInject */ function HMRProvider() {
  const Storage = new Map();

  this.register = register;
  this.pick = pick;

  // name = state.name + views.name + template / controller
  function register(name) {
    Storage.set(name, new Subject());
  }

  function pick(name) {
    return Storage.get(name);
  }

  this.$get = ['$injector', '$compile', '$state', function ($injector, $compile, $state) {
    return {
      notify
    };

    function notify(name, hotModule) {
      let subject = Storage.get(name);
      let [stateName, viewName, hotModuleType] = name.split('_');

      // 第一步先实现精确匹配
      if ($state.is(stateName)) {
        hotModuleType === 'template' ? hotUpdateTemplate(viewName, hotModule) : hotUpdateController(viewName, hotModule);
      }

      if ($state.includes(stateName) && !$state.is(stateName)) {
        hotUpdateBox(viewName, hotModule);
      }

      // 此处仅修改router声明, reload的时候才会生效,使之符合HMR原则
      subject.next(hotModule);
    }

    function hotUpdateBox(viewName, template) {
      let selector = `[ui-view=${viewName}]`;
      let target = angular.element(document.querySelector(selector));
      let scope = target.scope();
      let middleware = $compile(template)(scope);
      let subViewTargets = middleware.find('[ui-view]');

      if (subViewTargets.length) {
        let subViewSelectors = subViewTargets.map(function () {
          let subViwName = $(this).attr('ui-view');

          return `[ui-view=${subViwName}]`;
        }).toArray();

        middleware = subViewSelectors.reduce(function (prev, selector) {
          prev.find(selector).replaceWith($(selector));

          return prev;
        }, middleware);

        target.empty().append(middleware);
      } else {
        hotUpdateTemplate(viewName, template);
      }
    }

    function hotUpdateTemplate(viewName, template) {
      let selector = `[ui-view=${viewName}]`;
      let target = document.querySelector(selector);
      let scope = angular.element(target).scope();
      let middleware = $compile(template)(scope);

      $(selector).empty().append(middleware);
      scope.$apply();
    }

    function hotUpdateController(viewName, controller) {
      let selector = `[ui-view=${viewName}]`;
      let target = document.querySelector(selector);
      let scope = angular.element(target).scope();
      let prevVM = scope.vm;
      let nextVM = $injector.instantiate(controller, {$scope: scope});
      let toString = Object.prototype.toString;

      // 假设所有关联属性在constructor内部声明,变量类型不变
      angular.forEach(nextVM, (value, property) => {
        if (!has(prevVM, property) || toString.call(prevVM[property]) !== toString.call(nextVM[property])) {
          prevVM[property] = value;
        }
      });

      angular.forEach(Object.getOwnPropertyNames(nextVM.__proto__), (value, property) => {
        if (property !== 'constructor') {
          prevVM.__proto__[property] = nextVM.__proto__[property];
        }
      });

      scope.$apply();
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

      $hmrProvider.pick(templateAccessorToken).subscribe(template => {
        mirror.template = template;
      });

      $hmrProvider.pick(controllerAccessorToken).subscribe(controller => {
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