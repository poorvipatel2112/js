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