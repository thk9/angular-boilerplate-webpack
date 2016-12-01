/**
 * @description - share module combine several controller, filter, service, directive
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

import { promptFactory } from './service/prompt.factory';
import { postfixFilter } from './filter/postfix.filter';
import { ShowcaseController } from './controller/showcase.controller';
import { validateCaptchaDirective } from './directive/validate.directive';
import { fightDirective } from './directive/fight.directive';

// share module name
const SHARE_MODULE = 'app.share';

/**
 * @description - never declare any dependency here, because dependency should declare into root module
 */
angular.module(SHARE_MODULE, [])
  .factory('bkPrompt', promptFactory)
  .filter('bkPostfix', postfixFilter)
  // About controller
  // anonymous better than declaration in product module
  // none-anonymous better than declaration in share module
  .controller('ShowcaseController', ShowcaseController)
  .directive('bkValidateCaptcha', validateCaptchaDirective)
  .directive('bkFight', fightDirective);

// just export module name for root module
export { SHARE_MODULE };
