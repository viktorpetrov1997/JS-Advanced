const chai = require('chai');
const expect = chai.expect;

function sum(arr) 
{
    let sum = 0;

    for(let num of arr)
    {
        sum += Number(num);
    }

    return sum;
}

describe("sum function", function()
{
    it("should sum correctly", function ()
    {
        let array = [1,20,-3];

        let result = sum(array);

        expect(result).to.equal(18);
    });

    it('should sum floating point numbers correctly', function() 
    {
        let array = [1.1,2.2];

        let result = sum(array); 

        expect(result).to.be.approximately(3.3, 0.001);
    });

    it('should cast strings to Number before summing', function() 
    {
        let array = ['10','23'];

        let result = sum(array); 

        expect(result).to.equal(33);
    });

    it('should return NaN if a non-convertible string is passed', function() 
    {
        let array = ['ten','23'];

        let result = sum(array); 

        expect(result).to.be.NaN;
    });
});
   