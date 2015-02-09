var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var describe = lab.describe;
var it = lab.it;
var before = lab.before;
var after = lab.after;
var expect = Code.expect;

var concat = require('concat-stream');
var blacklight = require('../index');

var str = ' fnrtv​u00A0u1680​u180eu2000​u2001u2002​u2003u2004​u2005u2006​u2007u2008​u2009u200a​u2028u2029​u2028u2029​u202fu205f​u3000 ';
var expected = ' fnrtv​u00A0u1680​u180eu2000​u2001u2002​u2003u2004​u2005u2006​u2007u2008​u2009u200a​u2028u2029​u2028u2029​u202fu205f​u3000 ';
describe('escape', function () {
  it('should escape a string', function (done) {
    var data = blacklight(str);
    expect(data).to.equal(expected);
    done();
  });
  it('should toString and then escape a non-string', function (done) {
    var data = blacklight({});
    expect(data).to.equal({}.toString());
    done();
  });
});

describe('log', function () {
  var origConsoleLog;
  before(function (done) {
    origConsoleLog = console.log;
    done();
  });
  after(function (done) {
    console.log = origConsoleLog;
    done();
  });
  it('should log whitespace escaped with quotes', function (done) {
    console.log = function (data) {
      var expectedLog = '"' + expected + '"';
      expect(data).to.equal(expectedLog);
      done();
    };
    blacklight.log(str);
  });
  it('should log whitespace escaped with quotes for multiple arguments', function (done) {
    console.log = function (data1, data2) {
      var expectedLog = '"' + expected + '"';
      expect(data1).to.equal(expectedLog);
      expect(data2).to.equal(expectedLog);
      done();
    };
    blacklight.log(str, str);
  });
  it('should log an empty line when no args are given', function(done) {
    console.log = function (data) {
      expect(data).to.equal(undefined);
      done();
    };
    blacklight.log();
  });
  it('should log non-string types like normal', function (done) {
    var obj = { foo: 'bar' };
    console.log = function (data, data2) {
      var expectedLog = '"' + expected + '"';
      expect(data).to.equal(expectedLog);
      expect(data2).to.equal(obj);
      done();
    };
    blacklight.log(str, obj);
  });
});