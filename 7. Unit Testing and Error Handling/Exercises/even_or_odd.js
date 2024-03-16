const chai = require('chai');
const expect = chai.expect;

function isOddOrEven(string) 
{
    if(typeof(string) !== 'string') 
    {
        return undefined;
    }

    if(string.length % 2 === 0) 
    {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven function", function() 
{
    it("should return undefined for non-string value", function() 
    {
        let result = isOddOrEven(1);
        expect(result).to.be.undefined;
    });

    it("should return even strings with even length", function() 
    {
        let result = isOddOrEven("word");
        expect(result).to.equal("even");
    });

    it("should return odd strings with odd length", function() 
    {
        let result = isOddOrEven("chair");
        expect(result).to.equal("odd");
    });

    it("should return even for string with even length (multiple strings)", function() 
    {
        expect(isOddOrEven("word")).to.equal("even");
        expect(isOddOrEven("word")).to.equal("even");
        expect(isOddOrEven("word")).to.equal("even");
    });

    it("should return odd for string with odd length (multiple strings)", function() 
    {
        expect(isOddOrEven("chair")).to.equal("odd");
        expect(isOddOrEven("chair")).to.equal("odd");
        expect(isOddOrEven("chair")).to.equal("odd");
    });
});
