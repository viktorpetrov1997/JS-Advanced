const chai = require('chai');
const expect = chai.expect;

function lookupChar(string, index) 
{
    if(typeof(string) !== 'string' || !Number.isInteger(index)) 
    {
        return undefined;
    }

    if(string.length <= index || index < 0) 
    {
        return "Incorrect index";
    }
    
    return string.charAt(index);
}
   

describe("lookupChar function", function() 
{
    it("should return undefined if first parameter is not a string", function() 
    {
        let result = lookupChar(1,3);
        expect(result).to.be.undefined;
    });

    it("should return undefined if second parameter is not a number", function() 
    {
        let result = lookupChar("word","2");
        expect(result).to.be.undefined;
    });

    it("should return undefined if first parameter is not a string and second parameter is not a number", function() 
    {
        let result = lookupChar(4,"2");
        expect(result).to.be.undefined;
    });

    it("should return undefined if second parameter is a floating point number", function() 
    {
        let result = lookupChar("word",2.1);
        expect(result).to.be.undefined;
    });

    it("should return 'Incorrect index' if value of the index is bigger than the string length", function() 
    {
        let result = lookupChar("word",6);
        expect(result).to.equal("Incorrect index");
    });

    it("should return 'Incorrect index' if value of the index is equal to the string length", function() 
    {
        let result = lookupChar("word",4);
        expect(result).to.equal("Incorrect index");
    });

    it("should return 'Incorrect index' if value of the index is a negative number", function() 
    {
        let result = lookupChar("word",-1);
        expect(result).to.equal("Incorrect index");
    });

    it("should return the character at the specified index in the string.", function() 
    {
        let result = lookupChar("word",1);
        expect(result).to.equal("o");
    });
});
