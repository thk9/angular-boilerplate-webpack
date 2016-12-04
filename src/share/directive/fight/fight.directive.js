'use strict';

export /* @ngInject */ function fightDirective() {
  return {
    restrict: 'A',
    scope: false,
    template: require('./fight.html')
  };
}