//console.log(module.paths);
//buf = new Buffer(256);
//len = buf.write('\u00bd + \u00bc = \u00be', 0);
//console.log(len + " bytes: " + buf.toString('utf8', 0, len));

// var buf = new Buffer('test');
// var json = JSON.stringify(buf);

// console.log(json);
// // '[116,101,115,116]'

// var copy = new Buffer(JSON.parse(json));

// console.log(copy.toString());
// console.log(copy);
// <Buffer 74 65 73 74>

// str = "node.js";
// buf = new Buffer(str.length);

// for (var i = 0; i < str.length ; i++) {
//   buf[i] = str.charCodeAt(i);
// }

// console.log(buf);
// console.log(buf.toString());

str = '\u00bd + \u00bc = \u00be';

console.log(str + ": " + str.length + " characters, " +
  Buffer.byteLength(str, 'utf8') + " bytes");

// ½ + ¼ = ¾: 9 characters, 12 bytes