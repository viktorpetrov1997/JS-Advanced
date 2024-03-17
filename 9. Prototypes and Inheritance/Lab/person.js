function createPerson(firstName, lastName)
{
    let person = 
    {
        _firstName: firstName,
        _lastName: lastName,
        
        get firstName()
        {
            return this._firstName;
        },

        set firstName(newFirstName)
        {
            this._firstName = newFirstName;
        },

        get lastName()
        {
            return this._lastName;
        },

        set lastName(newLastName)
        {
            this._lastName = newLastName;
        },

        get fullName() 
        {
            return `${this._firstName} ${this._lastName}`;
        },

        set fullName(newFullName) 
        {
            const nameParts = newFullName.split(' ');
            if(nameParts.length === 2) 
            {
                this._firstName = nameParts[0];
                this._lastName = nameParts[1];
            }
        },
    };

    return person;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
console.log(person.fullName); //Tesla
