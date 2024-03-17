const chai = require('chai');
const expect = chai.expect;

const carService = require('./carService');


describe('carService object tests', function() 
{
    describe('isItExpensive function', function() 
    {
        it('should return a message indicating if the issue is expensive or not', function() {
            expect(carService.isItExpensive("Engine")).to.equal("The issue with the car is more severe and it will cost more money");
            expect(carService.isItExpensive("Transmission")).to.equal("The issue with the car is more severe and it will cost more money");
            expect(carService.isItExpensive("Something else")).to.equal("The overall price will be a bit cheaper");
        });
    });

    describe('discount function', function() 
    {
        it('should return error message if the input is invalid', function() {
            expect(() => { carService.discount("Not a number",100) }).to.throw("Invalid input");
            expect(() => { carService.discount(100, "Not a number") }).to.throw("Invalid input");
        });

        it('calculate discount', function() 
        {
            expect(carService.discount(5,100)).to.equal("Discount applied! You saved 15$");
            expect(carService.discount(10,100)).to.equal("Discount applied! You saved 30$");
        });

        it('cannot apply a discount', function() 
        {
            expect(carService.discount(1,100)).to.equal("You cannot apply a discount");
        });
    });

    describe('partsToBuy function', function() 
    {
        it('invalid input', function() {
            expect(() => { carService.partsToBuy({},["some value"]) }).to.throw("Invalid input");
            expect(() => { carService.partsToBuy([{ part: "blowoff valve", price: 145 }],{}) }).to.throw("Invalid input");
        });

        it('calculate total price', function() 
        {
            const partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "injectors", price: 180 }
            ];
            const neededParts = ["blowoff valve", "injectors"];

            expect(carService.partsToBuy(partsCatalog,neededParts)).to.equal(325);
        });
    });
});