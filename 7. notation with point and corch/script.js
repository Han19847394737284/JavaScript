var obj = {
    param1 : 1,
    param2 : "!hi",
    param3 : false,
    param4 : null,
    param5 : undefined,
    subObj : {
        param1 : 2,
        param2 : "!how are you",
        param3 : true,
        param4 : null,
        param5 : undefined,
        subSubObj : {
            param1 : 3,
            param2 : "!bye bye",
            param3 : true,
            param4 : null,
            param5 : undefined
        }
    }
}

console.log(obj);
console.log(obj.param1);
console.log(obj.param2);
console.log(obj.subObj);
console.log(obj.subObj.param1);
console.log(obj.subObj.param2);
console.log(obj.subObj.subSubObj);
console.log(obj.subObj.subSubObj.param1);
console.log(obj.subObj.subSubObj.param2);
console.log(obj['param1']);
console.log(obj['param2']);
console.log(obj['subObj']);
console.log(obj['subObj']['param1']);
console.log(obj['subObj']['param2']);
console.log(obj['subObj']['subSubObj']);
var field = "param1";
console.log(obj[field]);
