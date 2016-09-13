describe('angular-boilerplate main service without injector', function () {
  var $scope
    , $controller
    , prompt
    , showcase;

  beforeEach(module('App'));

  beforeEach(inject(function (_$rootScope_, _$controller_, _prompt_) {
    $scope = _$rootScope_.$new();
    $controller = _$controller_;
    prompt = _prompt_;
  }));

  it('should display default error desc', function () {
    spyOn(prompt, 'isValidPrompt').and.returnValues(false);
    $controller('ShowcaseController as showcase', {$scope: $scope, prompt: prompt});
    showcase = $scope.showcase;

    expect(showcase.errorDesc).toBeUndefined();
    showcase.handleAbnormalSituation();
    expect(showcase.errorDesc).toEqual('Network Fetch Failed......');
  });

  it('should display pass in error desc', function () {
    spyOn(prompt, 'isValidPrompt').and.returnValues(true);
    $controller('ShowcaseController as showcase', {$scope: $scope, prompt: prompt});
    showcase = $scope.showcase;

    expect(showcase.errorDesc).toBeUndefined();
    showcase.handleAbnormalSituation({errorDesc: 'Just Test Suit.......'});
    expect(showcase.errorDesc).toEqual('Just Test Suit.......');
  });

  afterEach(function () {

  });
});
