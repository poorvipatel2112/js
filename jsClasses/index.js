class Car{
    constructor(name , year){
        this.name = name;
        this.year = year;
    }

    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("ford" ,2014);
console.log("My car is " + myCar.age() + " years old.")


// another example of classes
class Pet{
    constructor(name, age){
        console.log('In pet constructor');
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} eats`
    }
}

const myPet = new Pet('pluffy', 5);

console.log(myPet.eat());

//extends

class Pets{
    constructor(name,age){
        console.log('Here it is..');
        this.name=name;
        this.age=age;
    }

    eats(){
        return `${this.name} likes to eat.`;
    }
}

class Dog extends Pets{
    bark(){
        return 'Woof';
    }
    eat(){
        return `${this.name} scarfs his food.`;
    }
}

class Cat extends Pets{
    constructor(name,age,livesLeft =9){
        console.log('here in cat class');
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'Meow';
    }
}

const kitty = new Cat('babe', 3);
const baby = new Pets('babe' , 5);
const bob = new Dog();
console.log(bob.bark());
console.log(kitty.meow());