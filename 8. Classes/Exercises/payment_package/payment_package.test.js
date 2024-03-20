const chai = require('chai');
const expect = chai.expect;

const paymentPackage = require('./payment_package');

describe("Tests for PaymentPackage class", () => 
{
    describe("Tests for the Name", () => 
    {
        it("constructor", () => 
        {
            const instance = new PaymentPackage("Name", 100);

            assert.equal(instance._name, "Name", "1");
            assert.equal(instance._value, 100, "3");
            assert.equal(instance._VAT, 20, "4");
            assert.equal(instance._active, true, "5");
        });

        it("throw new Error if the Name is a number", () => 
        {
            expect(() => new PaymentPackage(123, 213)).to.throw("Name must be a non-empty string");
        });

        it("throw new Error if the Name is a string array", () => 
        {
            expect(() => new PaymentPackage(["a", "b", "c"], 213)).to.throw("Name must be a non-empty string");
        });

        it("throw new Error if the Name is an empty string", () => 
        {
            expect(() => new PaymentPackage("", 213)).to.throw("Name must be a non-empty string");
        });

        it("should not throw error", () => 
        {
            expect(() => new PaymentPackage("abc", 213)).not.to.throw("Name must be a non-empty string");
        });
    });

    describe("Tests for the Value", () => {
        it("set value to null", () => {
            const instance = new PaymentPackage("Name", 100);
            assert.doesNotThrow(() => {
                instance.value = 0;
            });
        });

        it("throw new Error if the Value is string", () => {
            expect(() => new PaymentPackage("abc", "abc")).to.throw(
                "Value must be a non-negative number"
            );
        });

        it("throw new Error if the Value is array", () => {
            expect(() => new PaymentPackage("abc", [1, 2, 3])).to.throw(
                "Value must be a non-negative number"
            );
        });

        it("throw new Error if the Value is negative number", () => {
            expect(() => new PaymentPackage("abc", -123)).to.throw(
                "Value must be a non-negative number"
            );
        });

        it("should not throw error", () => {
            expect(() => new PaymentPackage("abc", 213)).not.to.throw(
                "Value must be a non-negative number"
            );
        });
    });

    describe("Tests for the VAT", () => {
        it("throw new Error if the VAT is string", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.VAT = "abc")).to.throw(
                "VAT must be a non-negative number"
            );
        });

        it("throw new Error if the VAT is an array", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.VAT = [123])).to.throw(
                "VAT must be a non-negative number"
            );
        });

        it("throw new Error if the VAT is a negative number", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.VAT = -3)).to.throw(
                "VAT must be a non-negative number"
            );
        });

        it("to not throw an Error if the Vat is a number", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.VAT = 123)).not.to.throw(
                "VAT must be a non-negative number"
            );
        });
    });

    describe("Tests for the Active", () => {
        it("throw new Error if the Active is string", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.active = "abc")).to.throw(
                "Active status must be a boolean"
            );
        });

        it("throw new Error if the Active is number", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.active = 123)).to.throw(
                "Active status must be a boolean"
            );
        });

        it("throw new Error if the Active is negative number", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.active = -123)).to.throw(
                "Active status must be a boolean"
            );
        });

        it("throw new Error if the Active is an array", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.active = [123])).to.throw(
                "Active status must be a boolean"
            );
        });

        it("to not throw an Error if Active is boolean", () => {
            const instance = new PaymentPackage("abc", 123);

            expect(() => (instance.active = true)).not.to.throw(
                "Active status must be a boolean"
            );
        });
    });

    describe("Tests for the toString method", () => {
        it("if input is correct to return string", () => {
            const instance = new PaymentPackage("abc", 123);
            const output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`,
            ];

            expect(instance.toString()).to.equal(output.join("\n"));
        });

        it("if input is correct and Vat is set to 30 to return string", () => {
            const instance = new PaymentPackage("abc", 123);
            instance.VAT = 30;
            const output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`,
            ];

            expect(instance.toString()).to.equal(output.join("\n"));
        });

        it("if input is correct and Active is set to false to return string", () => {
            const instance = new PaymentPackage("abc", 123);
            instance.active = false;
            const output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`,
            ];

            expect(instance.toString()).to.equal(output.join("\n"));
        });

        it("if input is correct and Active is set to false and VAT to 30 to return string", () => {
            const instance = new PaymentPackage("abc", 123);
            instance.VAT = 30;
            instance.active = false;

            const output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`,
            ];

            expect(instance.toString()).to.equal(output.join("\n"));
        });
    });
});