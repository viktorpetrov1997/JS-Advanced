function extendClass(classToExtend)
{
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function() 
    {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

class Animal 
{
    constructor(name) 
    {
        this.name = name;
    }

    toString() 
    {
        return `My name is ${this.name}.`;
    }
}

extendClass(Animal);

let animal = new Animal("Rex");
console.log(animal.species);
console.log(animal.toSpeciesString());