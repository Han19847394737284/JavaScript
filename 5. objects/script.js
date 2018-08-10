//each object have a param named "__proto__"
//each object that it is inside other object is named "cadena"
//the object always is pass for "reference"
//the objects are execute 
var obj = {};
var obj2 = {
    param1 : 1,
    param2 : "!hi",
    param3 : false,
    param4 : null,
    param5 : undefined
}
var obj3 = {
    param1 : 1,
    param2 : "!hi",
    param3 : false,
    param4 : null,
    param5 : undefined,
    obj2 : {
        param1 : 1,
        param2 : "!hi",
        param3 : false,
        param4 : null,
        param5 : undefined
    }
}

{
    var anomParam1= "hi";
    var anomParam2= "Hello"
}

//console.log(obj);
//console.log(obj2);
//console.log(obj3);
