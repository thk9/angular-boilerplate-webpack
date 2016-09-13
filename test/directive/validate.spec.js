describe('angular-boilerplate main service without injector', function () {
  var $compile
    , $scope;

  beforeEach(module('App'));

  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
  }));

  afterEach(function () {

  });
});
