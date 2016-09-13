describe('angular-boilerplate main service without injector', function () {
  var postfix;

  beforeEach(module('App'));

  beforeEach(inject(function (_$filter_) {
    postfix = _$filter_('postfix');
  }));

  it('should add postfix after text', function () {
    var origin = 'hello world';
    expect(postfix(origin)).toEqual(origin);
    expect(postfix(origin, '!')).toEqual(origin + '!');
  });

  afterEach(function () {

  });
});
