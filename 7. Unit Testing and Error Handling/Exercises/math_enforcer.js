const chai = require('chai');
const expect = chai.expect;

let mathEnforcer = 
{
    addFive: function(num) 
    {
        if(typeof(num) !== 'number') 
        {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function(num) 
    {
        if(typeof(num) !== 'number') 
        {
            return undefined;
        }
        return num - 10;
    },
    sum: function(num1, num2) 
    {
        if(typeof(num1) !== 'number' || typeof(num2) !== 'number') 
        {
            return undefined;
        }
        return num1 + num2; 
    }
};

describe("mathEnforcer object", function() 
{
    describe("addFive function", function()
    {
        it("should return undefined if the parameter is not a number", function() 
        {
            let result = mathEnforcer.addFive("word");
            expect(result).to.be.undefined;
        });

        it("should return correct result for floating point number if it is within 0.01 of the correct value", function() 
        {
            let result = mathEnforcer.addFive(2.4);
            expect(result).to.be.closeTo(7.4, 0.01);
        });

        it("should return correct result if the parameter is a number", function() 
        {
            let result = mathEnforcer.addFive(4);
            expect(result).to.equal(9);
        });

        it("should return correct result if the parameter is a negative number", function() 
        {
            let result = mathEnforcer.addFive(-4);
            expect(result).to.equal(1);
        });
    });

    describe("subtractTen function", function()
    {
        it("should return undefined if the parameter is not a number", function() 
        {
            let result = mathEnforcer.subtractTen("word");
            expect(result).to.be.undefined;
        });

        it("should return correct result for floating point number if it is within 0.01 of the correct value", function() 
        {
            let result = mathEnforcer.subtractTen(2.4);
            expect(result).to.be.closeTo(-7.6, 0.01);
        });

        it("should return correct result if the parameter is a number", function() 
        {
            let result = mathEnforcer.subtractTen(4);
            expect(result).to.equal(-6);
        });

        it("should return correct result if the parameter is a negative number", function() 
        {
            let result = mathEnforcer.subtractTen(-4);
            expect(result).to.equal(-14);
        });
    });

    describe("sum function", function()
    {
        it("should return undefined if the first parameter is not a number", function() 
        {
            let result = mathEnforcer.sum("word",5);
            expect(result).to.be.undefined;
        });

        it("should return undefined if the second parameter is not a number", function() 
        {
            let result = mathEnforcer.sum(5,"word");
            expect(result).to.be.undefined;
        });

        it("should return correct result for floating point numbers if it is within 0.01 of the correct value", function() 
        {
            let result = mathEnforcer.sum(2.4,3.7);
            expect(result).to.be.closeTo(6.1, 0.01);
        });

        it("should return correct result if the parameters are numbers", function() 
        {
            let result = mathEnforcer.sum(4,6);
            expect(result).to.equal(10);
        });

        it("should return correct result if the parameters are negative numbers", function() 
        {
            let result = mathEnforcer.addFive(-4,-6);
            expect(result).to.equal(-10);
        });
    });
});
