
//prims pass for value
console.info("prims pass for value");
var a = 10;
var b = 20;

console.log("a: " + a);
console.log("b: " + b);

var a = 30;

console.log("a: " + a);
console.log("b: " + b);

console.info("objects pass for reference");

var obj1 = {
    param1 : 1,
    param2 : "!hi",
}
var obj2 = {
    param1 : 2,
    param2 : "!hola",
}
console.info("before");
console.log("obj1:");
console.log(obj1);
console.log("obj2:");
console.log(obj2);

obj1.param1 = 10
obj1.param2 = "Bye bye";

obj2 = obj1;

console.info("after");
console.log("obj1:");
console.log(obj1);
console.log("obj2:");
console.log(obj2);