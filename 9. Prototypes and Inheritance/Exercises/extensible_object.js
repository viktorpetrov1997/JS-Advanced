function extensibleObject() 
{
    let obj = 
    {
        extend: function(template) 
        {
            for(let prop in template) 
            {
                if(typeof template[prop] === 'function') 
                {
                    this.__proto__[prop] = template[prop];
                } 
                else 
                {
                    this[prop] = template[prop];
                }
            }
        }
    };

    return obj;
}

const myObj = extensibleObject();

myObj.extend(
{
    name: 'John',
    age: 30,
    greet: function() 
    {
        return 'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.';
    }
});

console.log(myObj.name); // Output: John
console.log(myObj.age); // Output: 30
console.log(myObj.greet()); // Output: Hello, my name is John and I am 30 years old.
