var carro = {
    color: "White",
    mark: "Toyota",
    print: function(){
        var output = this.color + " " + this.mark;
        return output;
    }
}

console.log(carro);
console.log(carro.print());

var carro2 = function(arg1, arg2){
    console.log(this.print());
    console.log("Params: ", arg1, arg2)
}

var car2Bind = carro2.bind(carro);

car2Bind();
 
car2Bind.call(carro, "Red", "Hiundai");
car2Bind.call(carro, ["Red", "Hiundai"]);
