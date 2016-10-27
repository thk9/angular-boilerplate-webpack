/**
 * @description - HMR bridge manager
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import omit from 'lodash/omit';
import { Subject } from 'rxjs/Subject';
// import { mapTo } from 'rxjs/operator/mapTo';

export /* @ngInject */ function HMRProvider() {
  const Storage = new Map();

  this.register = register;
  this.pick = pick;

  this.$get = [function () {
    return {notify};
  }];

  // name = state.name + views.name + template / controller
  function register(name) {
    Storage.set(name, new Subject());
  }

  function pick(name) {
    return Storage.get(name);
  }

  function notify(name, module) {
    let subject = Storage.get(name);

    subject.next(module);
  }
}

export /* @ngInject */ function HMRStateProviderConfig($stateProvider, $hmrProvider) {
  $stateProvider.decorator('views', function (state, parent) {
    let target = {};
    let views = parent(state);

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