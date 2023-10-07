//maunally creating a object
let person1 = {
    firstname: 'Poorvi',
    lastname: 'Patel',
    getFullName() {
        return this.firstname + this.lastname;
    },
};
console.log(person1.getFullName());



//creating object using factory function
function createPerson(firstname , lastname){
    return {
        firstname : firstname,
        lastname : lastname,
        getFullName(){
            return firstname + " " +  lastname;
        },
    };
}

let personOne = createPerson('Rachit' , 'Patel');
let personTwo = createPerson('Nishit' , 'Patel')

console.log(personOne.getFullName());
console.log(personTwo.getFullName());

//using Object.create() method to create object as it is the most efficient method for factory function to create object.

let personActions = {
    getFullName(){
        return this.firstname + ' ' + this.lastname;
    },
}

function createPersons(firstname,lastname){
    //let objectname = Object.create(proto)
    let person = Object.create(personActions);
    person.firstname = firstname;
    person.lastname = lastname;
    return person;
}

let personA = createPersons('Laxmi', 'Patel');
let personB = createPersons('Keshav' , 'Patel');

console.log(personA.getFullName());
console.log(personB.getFullName());