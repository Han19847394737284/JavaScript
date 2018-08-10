//the functions are objects
var a = 10;
var b = 20;

function function1(){
	var b = 50;
	var c = 100;
	console.log(a);
	console.log(b);
	console.log(c);
}

function1();

console.log('--------------------------------------------------');

function function2(param1, param2){
	console.log(param1);
	console.log(param2);
}

function2(10, 20);
function2(a, b);
function2(a);

console.log('--------------------------------------------------');

function function3(obj1, obj2){
	console.log(obj1);
	console.log(obj2);
	obj1.name = "ALASKA";
}

obj1 = {
	name : "edd",
	old : 10
}
obj2 = {
	name : "eddy",
	old : 20
}

function3(obj1, obj2);

function3({
		name : "edd",
		old : 10
	},
	{
		name : "eddy",
		old : 20
	}
);

function3(obj1);

console.log("Object pass for reference modified")
console.log(obj1);

console.log('--------------------------------------------------');

function function4(fn1){
	console.log(fn1);
	fn1();
}

function functionInVar(){
	console.log("i'm normal function");
}

var fun1 = function functionInVar(){
	console.log("i'm a function in variable");
}

function4(functionInVar);
function4(fun1);
function4(function(){
	console.log("i'm a anonimous function");
});


console.log('--------------------------------------------------');
// a function allow return prim, object, function

function function5(param1){
	return param1;
}

function returnObjetAnon(){
	return {
		name : "edd",
		old : 10
	}
}

function returnFunctionAnon(){
	return function anom(){
		console.log("i'am a function anonimous");
	}
}

console.log(function5(5));
console.log(function5({
	name : "edd",
	old : 10
}));
console.log(function5(
	function anom(){
		console.log("i'am a function anonimous");
	}
))
var anom = function anom(){
	console.log("i'am a function anonimous");
}
console.log(function5(anom));


