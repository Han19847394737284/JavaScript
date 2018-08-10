var a = 10;
var b = new Number();
var c = "Hola";
var d = new String();
var e = {
    name : "i'm a object"
};
var f = new Object(name4 = "I'm a Object", name2 = "iojfef");

console.log("--------------------------------");
console.log(a);
console.log(typeof(a));
console.log("--------------------------------");
console.log(b);
console.log(typeof(b));
console.log("--------------------------------");
console.log(c);
console.log(typeof(c));
console.log("--------------------------------");
console.log(d);
console.log(typeof(d));
console.log("--------------------------------");
console.log(e);
console.log(typeof(e));
console.log("--------------------------------");
console.log(f);
console.log(typeof(f));
console.log("--------------------------------");
//console.log(new e());
console.log(typeof(e));
console.log("--------------------------------");

function human(name,  lastName){
    this.name = name;
    this.lastName = lastName;
    console.log(this);
    console.log(this.name + " " + this.lastName);
    this.printHuman = function(){
        console.log("printHuman");
        console.log(this);
    }
    //this line is for execute printHuman Function
    printHuman();
}

console.log(human);
console.log(human.printHuman);
//console.log(human.printHuman());
console.log(typeof(human));
console.log("-----------");
console.log(human("Lion", "Dede"));
//console.log(human("Lion", "Dede").printHuman);
//console.log(human("Lion", "Dede").printHuman());
console.log(typeof(human("Lion", "Dede")));
console.log("-----------");
console.log(new human("Lion", "Dede"));
console.log(new human("Lion", "Dede").printHuman);
console.log(new human("Lion", "Dede").printHuman());
console.log(typeof(new human("Lion", "Dede")));


