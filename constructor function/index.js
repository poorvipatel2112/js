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

