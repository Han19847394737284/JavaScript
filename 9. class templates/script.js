//In javaScript the class template are build with functions
//because the functions create new contexts, enviroments

function function1(){
	console.log("i'm a function");
}
function1();
console.log(function1());
console.log(function1);
//mechanics of functions first class
console.log(function1.name);
function1.nombre = "NewName";
console.log(function1.name);


//functions allow create properties a methods

