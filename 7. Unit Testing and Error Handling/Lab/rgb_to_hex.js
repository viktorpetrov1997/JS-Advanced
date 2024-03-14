const chai = require('chai');
const expect = chai.expect;

function rgbToHexColor(red, green, blue) 
{
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
    {
        return undefined; // Red value is invalid
    }

    if (!Number.isInteger(green) || (green < 0) || (green > 255))
    {
        return undefined; // Green value is invalid
    }
    
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
    {
        return undefined; // Blue value is invalid
    }

    return "#" +
    ("0" + red.toString(16).toUpperCase()).slice(-2) +
    ("0" + green.toString(16).toUpperCase()).slice(-2) +
    ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("rgbToHexColor function", function() 
{
    it("should return correct hex color for valid RGB values", function() 
    {
        let result = rgbToHexColor(255, 0, 0);
        expect(result).to.equal("#FF0000");

        result = rgbToHexColor(0, 255, 0);
        expect(result).to.equal("#00FF00");

        result = rgbToHexColor(0, 0, 255);
        expect(result).to.equal("#0000FF");

        result = rgbToHexColor(128, 128, 128);
        expect(result).to.equal("#808080");
    });

    it("should return undefined for out of range RGB values", function() 
    {
        let result = rgbToHexColor(256, 0, 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, 256, 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, 0, 256);
        expect(result).to.be.undefined;

        result = rgbToHexColor(-1, 0, 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, -1, 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, 0, -1);
        expect(result).to.be.undefined;
    });

    it("should return undefined for non-integer RGB values", function() 
    {
        let result = rgbToHexColor(12.5, 0, 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, 25.5, 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, 0, 128.75);
        expect(result).to.be.undefined;
    });

    it("should return undefined for non-numeric input", function() 
    {
        let result = rgbToHexColor("255", 0, 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, "255", 0);
        expect(result).to.be.undefined;

        result = rgbToHexColor(0, 0, "255");
        expect(result).to.be.undefined;
    });
});
