function Person(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function(){
        // console.log(this)
        return this.firstName + ' ' + this.lastName;
    };
}

let person = new Person('Poorvi' , 'Patel');
console.log(person.getFullName());

//another practice code on constructor function

function Employee(firstname , lastname , salary){
    this.firstname = firstname;
    this.lastName = lastname;
    this.salary = salary;

    this.getName = function(){
        return firstname + " " + lastname;
    }

    this.details = function(){
        return "The salary of employee " + this.getName() + " is " + salary;
    }
}

let emp1 = new Employee('Poorvi', 'Patel' , 20000);
let emp2 = new Employee('Kanchan', 'Sikder' , 20000);

console.log(emp1.getName());
console.log(emp2.getName());

console.log(emp1.details());
console.log(emp2.details());

