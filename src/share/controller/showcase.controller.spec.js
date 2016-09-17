/**
 * @description - BkShowcaseController unit test
 */
import { BkShowcaseController } from './showcase.controller';

describe('angular-boilerplate-webpack showcase controller', function () {
  var $controller
    , bkPrompt;
  
  // webpack weird issue, global variable not working
  beforeEach(angular.mock.module('AppMirror'));
  
  beforeEach(inject(function (_$rootScope_, _$controller_, _bkPrompt_) {
    $controller = _$controller_;
    bkPrompt = _bkPrompt_;
  }));
  
  it('should display default error desc', function () {
    var bkShowcase;
  
    spyOn(bkPrompt, 'isValidPrompt').and.returnValues(false);
    bkShowcase = $controller(BkShowcaseController, {bkPrompt: bkPrompt});
    
    expect(bkShowcase.errorDesc).toBeUndefined();
    
    bkShowcase.handleAbnormalSituation();
    expect(bkShowcase.errorDesc).toEqual('Network Fetch Failed......');
  });
  
  it('should display pass in error desc', function () {
    var bkShowcase;
  
    spyOn(bkPrompt, 'isValidPrompt').and.returnValues(true);
    bkShowcase = $controller(BkShowcaseController, {bkPrompt: bkPrompt});
  
    expect(bkShowcase.errorDesc).toBeUndefined();
  
    bkShowcase.handleAbnormalSituation({errorDesc: 'Just Test Suit.......'});
    expect(bkShowcase.errorDesc).toEqual('Just Test Suit.......');
  });
  
  afterEach(function () {
    
  });
});
