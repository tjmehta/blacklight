'use strict';

var whitespaces = [
  {
     re: /\f/g,
    str: '\f'
  },
  {
     re: /\n/g,
    str: '\n'
  },
  {
     re: /\r/g,
    str: '\r'
  },
  {
     re: /\t/g,
    str: '\t'
  },
  {
     re: /\v​/g,
    str: '\v​'
  },
  {
    re:  /\u00A0/g,
    str: '\u00A0'
  },
  {
    re:  /\u1680​/g,
    str: '\u1680​'
  },
  {
    re:  /\u180e/g,
    str: '\u180e'
  },
  {
    re:  /\u2000​/g,
    str: '\u2000​'
  },
  {
    re:  /\u2001/g,
    str: '\u2001'
  },
  {
    re:  /\u2002​/g,
    str: '\u2002​'
  },
  {
    re:  /\u2003/g,
    str: '\u2003'
  },
  {
    re:  /\u2004​/g,
    str: '\u2004​'
  },
  {
    re:  /\u2005/g,
    str: '\u2005'
  },
  {
    re:  /\u2006​/g,
    str: '\u2006​'
  },
  {
    re:  /\u2007/g,
    str: '\u2007'
  },
  {
    re:  /\u2008​/g,
    str: '\u2008​'
  },
  {
    re:  /\u2009/g,
    str: '\u2009'
  },
  {
    re:  /\u200a​/g,
    str: '\u200a​'
  },
  {
    re:  /\u2028/g,
    str: '\u2028'
  },
  {
    re:  /\u2029​/g,
    str: '\u2029​'
  },
  {
    re:  /\u2028/g,
    str: '\u2028'
  },
  {
    re:  /\u2029​/g,
    str: '\u2029​'
  },
  {
    re:  /\u202f/g,
    str: '\u202f'
  },
  {
    re:  /\u205f​/g,
    str: '\u205f​'
  },
  {
    re:  /\u3000/g,
    str: '\u3000'
  }
];

module.exports = escapeWhitespace;

function escapeWhitespace (str) {
  return whitespaces.reduce(function (str, obj) {
    return str.replace(obj.re, '\\'+obj.str);
  }, str);
}

module.exports.log = function (/* arguments */) {
  if (arguments.length === 0) { return console.log(); }
  var escaped = Array.prototype.map.call(arguments, function (arg) {
    return '"' + escapeWhitespace(arg) + '"';
  });
  return console.log.apply(console, escaped);
};