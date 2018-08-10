var arr = [5, 4, 3, 2, 1];
console.log(arr);
console.log(arr[0]);

arr = arr.map(function(item){
    console.log("ingreso");
    return item *= 2;
});

console.log(arr);


var arr2 = [
    true,
    {
        name: "Object Anonimous",
        lastName: "Last Name"
    },
    function(){
        console.log("I am a function inside a function in a array");
        console.log(this[1].name + " TEXT " + this[1].lastName);
        console.log(this);
    },
    this

]

console.log(arr2);
console.log(arr2[3]);
console.log(arr2[2]());