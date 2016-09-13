describe('angular-boilerplate main service without injector', function () {
  var prompt;

  beforeAll(function() {
    expect(_).toBeDefined();
  });

  beforeEach(module('App'));

  beforeEach(inject(function (_prompt_) {
    prompt = _prompt_;
  }));

  it('should validate error structure', function () {
    var origin = {success: false, errorDesc: 'system error'}
      , abnormal = {success: true, errorDesc: ''};

    expect(prompt.isValidPrompt(origin)).toBeTruthy();
    expect(prompt.isValidPrompt(abnormal)).toBeFalsy();
  });

  it('should escape illegal characters', function () {
    var origin = {errorDesc: '<p class="text-info"></p>'};
    expect(prompt.escapeValidPrompt(origin)).toEqual('&lt;p class=&quot;text-info&quot;&gt;&lt;/p&gt;');
  });

  afterEach(function () {

  });
});
