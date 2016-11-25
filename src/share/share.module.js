/**
 * @description - share module combine several controller, filter, service, directive
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import { promptFactory } from './service/prompt.factory';
import { postfixFilter } from './filter/postfix.filter';
import { BkShowcaseController } from './controller/showcase.controller';
import { bkValidateCaptchaDirective } from './directive/validate.directive';
import { fightDirective } from './directive/fight.directive';

// share module name
const SHARE_MODULE = 'app.share';

/**
 * @description - never declare any deps here, because deps should declare into root module
 */
angular.module(SHARE_MODULE, [])
  .factory('bkPrompt', promptFactory)
  .filter('bkPostfix', postfixFilter)
  // About controller
  // anonymous better than declaration in product module
  // anonymous better than declaration in share module
  .controller('BkShowcaseController', BkShowcaseController)
  .directive('bkValidateCaptcha', bkValidateCaptchaDirective)
  .directive('bkFight', fightDirective);

// just export module name for root module
export { SHARE_MODULE };

if (module.hot) {
  module.hot.accept(['./directive/fight.directive'], function () {
    let { fightDirective } = require('./directive/fight.directive');

    $hmr.hmrOnChange('Directive', 'bkFight', fightDirective);
    $hmr.hmrDoActive('Directive', 'bkFight');
  });
  // module.hot.accept(['./service/prompt.factory'], function () {
  //   let { promptFactory } = require('./service/prompt.factory');
  //
  //   $hmr.hmrOnChange('Factory', 'bkPrompt', promptFactory);
  // });
  //
  module.hot.accept(['./filter/postfix.filter'], function () {
    let { postfixFilter } = require('./filter/postfix.filter');

    $hmr.hmrOnChange('Filter', 'bkPostfix', postfixFilter);
    $hmr.hmrDoActive('Filter', 'bkPostfix', postfixFilter);
  });
}