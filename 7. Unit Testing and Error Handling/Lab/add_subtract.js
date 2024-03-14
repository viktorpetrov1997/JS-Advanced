const chai = require('chai');
const expect = chai.expect;

function createCalculator() 
{
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    };
}

describe("createCalculator function", function() 
{
    it("should return an object with add(), subtract(), and get() functions", function() 
    {
        let calculator = createCalculator();
        expect(calculator).to.be.an('object');
        expect(calculator.add).to.be.a('function');
        expect(calculator.subtract).to.be.a('function');
        expect(calculator.get).to.be.a('function');
    });

    it("should initialize with a default value of 0", function() 
    {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it("should correctly add numbers to the internal sum", function() 
    {
        let calculator = createCalculator();
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
        calculator.add(10);
        expect(calculator.get()).to.equal(15);
    });

    it("should correctly subtract numbers from the internal sum", function() 
    {
        let calculator = createCalculator();
        calculator.subtract(3);
        expect(calculator.get()).to.equal(-3);
        calculator.subtract(7);
        expect(calculator.get()).to.equal(-10);
    });

    it("should correctly handle string inputs", function() 
    {
        let calculator = createCalculator();
        calculator.add("5");
        expect(calculator.get()).to.equal(5);
        calculator.subtract("3");
        expect(calculator.get()).to.equal(2);
    });

    it("should handle mixed string and number inputs", function() 
    {
        let calculator = createCalculator();
        calculator.add("5");
        expect(calculator.get()).to.equal(5);
        calculator.subtract(3);
        expect(calculator.get()).to.equal(2);
    });

    it("should handle negative numbers", function() 
    {
        let calculator = createCalculator();
        calculator.add(-5);
        expect(calculator.get()).to.equal(-5);
        calculator.subtract("-3");
        expect(calculator.get()).to.equal(-8);
    });
});
