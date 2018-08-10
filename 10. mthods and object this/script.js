//the objects allow properties and methods
/*var obj1 = {
	contextObj:this,
	nameObj1 : "I'm obj1",
	subObj1 : {
		contextSubObj1: this,
		directionSubObj1 : "I'm subObj1"
	},
	printObj1 : function printObj1(){
		var namePrintObj1 = "namePrintObj1";
		console.log(namePrintObj1);
		return this;
	},
	subObj2 : {
		contextSubObj2: this,
		directionSubObj2 : "I'm subObj2",
		subSubObj2 : {
			contextSubObj2: this,
			directionSubObj2 : "I'm subSubObj2",
		},
		printSubObj2 : function printSubObj2(){
			var namePrintSubObj2 = "namePrintSubObj2";
			console.log(namePrintSubObj2);
			return this;
		},
		printSubObj22 : function(){
			var self = this;
			var namePrintSubObj22 = "namePrintSubObj22";
			console.log(namePrintSubObj22);

			printSubObj221 : function printSubObj221(){
				var namePrintSubObj221 = "namePrintSubObj221";
				console.log(namePrintSubObj221);
				return self;
			}
			console.log(printSubObj221);
			console.log(printSubObj221());

			return this;
		}
	},
}
console.info("-----------------obj1-----------------");
console.log(obj1);
console.info("-----------------obj1 subObj1-----------------");
console.log(obj1.subObj1);
console.info("-----------------obj1 printObj1-----------------");
console.log(obj1.printObj1);
console.log(obj1.printObj1());
console.info("-----------------obj1 subObj2-----------------");
console.log(obj1.subObj2);
console.info("-----------------obj1 subObj2 subSubObj2-----------------");
console.log(obj1.subObj2.subSubObj2);
console.info("-----------------obj1 subObj2 printObj2-----------------");
console.log(obj1.subObj2.printSubObj2);
console.log(obj1.subObj2.printSubObj2());
console.info("-----------------obj1 subObj2 printObj22-----------------");
console.log(obj1.subObj2.printSubObj22);
console.log(obj1.subObj2.printSubObj22());
console.info("-----------------obj1 subObj2 printObj22 printSubObj221-----------------");
console.log(obj1.subObj2.printSubObj22.namePrintSubObj221);
console.log(obj1.subObj2.printSubObj22().namePrintSubObj221);

function function2(){
	var subObjFunc2 = {
		subObjFunc2 : this,
		directionSubObj1 : "I'm subObj1",
		numberSubObj1 : "5843022"
	};
	var printObj1 = function printObj1(){
		namePrintObj1 = "namePrintObj1";
		console.log(namePrintObj1);
		return this;
	};
	function printObj2(){
		namePrintObj2 = "namePrintObj2";
		console.log(namePrintObj2);
		return this;
	};
	console.log(subObjFunc2);
	console.log(printObj1());
	console.log(printObj2())
	return this;
}
function2.name2 = "I'm a function2";

console.info("-----------------function2-----------------");
console.log(function2);
console.log(function2());
console.log(function2.name2);*/



console.info("----------------------SCOPE----------------------");

console.log(window);

function a_f1(){
	af1a = "a_f1";
	af1b = this;
	af1c = function(){
		console.log("af1c");
	}
}

function a_f2(){
	var af2a = "a_f2";
	var af2b = this;
	var af2c = function(){
		console.log("af2c");
	}
}

function a_f3(){
	this.af3a = "a_f3";
	this.af3b = this;
	this.af3c = function(){
		console.log("af3c");
	}
}

function a_f4(){
	let af4a = "a_f4";
	let af4b = this;
	let af1c = function(){
		console.log("af4c");
	}
}

a_f5 = function a_f5(){
	af5a = "a_f5";
	af5b = this;
	af5c = function(){
		console.log("af5c");
	}
}

a_f6 = function(){
	af6a = "a_f6";		
	af6b = this;
	af6c = function(){
		console.log("af6c");
	}
}

a_f7 = (function (){
	af7a = "a_f7";
	af7b = this;
	af7c = function(){
		console.log("af7c");
	}
});

(function (){
	af8a = "a_f8";
	af8b = this;
}); //execute this with "()" in the end

function a_f9(){
	this.af9a = "a_f9";
	af9b = this;
	this.af9c = function(){
		console.log("af9c");
	}
}


a_f1.af1c = "Una Variable";

/*a_f1();
a_f2();
a_f3();
a_f4();
a_f5();
a_f6();
a_f7();*/


new a_f1();
new a_f2();
new a_f3();
new a_f4();
new a_f5();
new a_f6();
new a_f7();
new a_f9();

aaa = new a_f1();
abb = new a_f3();
acc = new a_f9();