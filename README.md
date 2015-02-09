# blacklight
Escape whitespace in strings

## Usage
### Escape
```js
var blacklight = require('blacklight');

var escaped = blacklight('\t\r\n'); // '\t\r\n' escaped, '\\t\\r\\n'
```
### Log
```js
var blacklight = require('blacklight');

blacklight.log('\t\r\n'); // prints '\t\r\n' instead of whitespace
```

## License
MIT