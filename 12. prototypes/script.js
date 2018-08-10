function Human(){
    a = "Ale";
    b = "Bulla";

    this.printInfo = function(){
        console.log(this.a + " " + b);
    }
}

Human.prototype.printInfo1 = function(){
    console.log(this.a + " PROTOTYPE " + b);
}

var h = new Human();
Human();
console.log(h);
console.log(Human);
console.log(h.printInfo1());
console.log(h.printInfo());


/*name = "GLOBAL";
old = "OldGlobal";
power = "PowerGlobal";
pv = "PvGlobal";

function Human (){
    name = "Human Attack!!";
    old = 0;
    power = 100;
    pv = 100;
    console.log(this);

    print = function(){
        console.log(this);
        console.log(name);
    }

    print();
}
console.log(Human);
console.log(Human());
//console.log(Human().print());
console.log(Human(print()));
console.log("-----------------------------");
console.log(new Human());
//console.log(new Human().print());

console.log("------------------------------------Human2-----------------------------------");

function Human2 (){
    var name = "Human Attack!!";
    var old = 0;
    var power = 100;
    var pv = 100;
    console.log(this);

    var print = function(){
        console.log(this);
        console.log(name);
    }

    print();
}
console.log(Human2);
console.log(Human2());
//console.log(Human().print());
console.log(Human2(print()));
console.log("-----------------------------");
console.log(new Human2());
//console.log(new Human2().print());

console.log("------------------------------------Human3-----------------------------------");

function Human3 (){
    this.name = "Human Attack!!";
    this.old = 0;
    this.power = 100;
    this.pv = 100;
    console.log(this);

    this.print = function(){
        console.log(this);
        console.log(this.name);
    }

    print();
}
console.log(Human3);
console.log(Human3());
//console.log(Human().print());
console.log(Human3(print()));
console.log("-----------------------------");
console.log(new Human3());
console.log(new Human3().print());

console.log("------------------------------------Human4-----------------------------------");

function Human4 (){
    this.name = "Human Attack!!";
    this.old = 0;
    this.power = 100;
    this.pv = 100;
    console.log(this);

    print = function(){
        console.log(this);
        console.log(this.name);
    }

    print();
}
console.log(Human4);
console.log(Human4());
//console.log(Human().print());
console.log(Human4(print()));
console.log("-----------------------------");
console.log(new Human4());
console.log(new Human4().print());

console.log("------------------------------------Human4-----------------------------------");

function Human4 (){
    self = this;
    self.name = "Human Attack!!";
    self.old = 0;
    self.power = 100;
    self.pv = 100;
    console.log(self);

    self.print = function(){
        console.log(self);
        console.log(self.name);
    }

    print();
}
console.log(Human4);
console.log(Human4());
//console.log(Human().print());
console.log(Human4(print()));
console.log("-----------------------------");
console.log(new Human4());
console.log(new Human4().print());

console.log("------------------------------------Human5-----------------------------------");

function Human5 (){
    var self5 = {};
    self5.name = "Human Attack!!";
    self5.old = 0;
    self5.power = 100;
    self5.pv = 100;
    console.log(self5);

    self5.print = function(){
        console.log(self5);
        console.log(this);
        console.log(self5.name);
        console.log(this.name);
    }

    self5.print();
}
console.log(Human5);
console.log(Human5());
//console.log(Human().print());
//console.log(Human5(self5.print()));
console.log("-----------------------------");
console.log(new Human5());
//console.log(new Human5().print());*/