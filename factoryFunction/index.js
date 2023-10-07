let person1 = {
    firstname: 'Poorvi',
    lastname: 'Patel',
    getFullName() {
        return this.firstname + this.lastname;
    },
};

console.log(person1.getFullName());