//the object always is pass for "value"
var num = 1;
var str = "!hi";
var bool = false;
var undef = undefined;
var nul = null;

console.log(num);
console.log(str);
console.log(bool);
console.log(nul);

bool = num;
num = str;

console.log(num);
console.log(str);
console.log(bool);
console.log(nul);