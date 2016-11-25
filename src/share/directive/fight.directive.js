'use strict';

export /* @ngInject */ function fightDirective() {
  return {
    restrict: 'A',
    scope: false,
    template: `
      <h3 class="text-info">Hello world HMR HELL!</h3>
      <h4 class="text-primary">Let's make HMR powerful again!!!</h4>
    `
  };
}