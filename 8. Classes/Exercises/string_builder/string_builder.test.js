const chai = require('chai');
const expect = chai.expect;

const paymentPackage = require('./string_builder');

describe('StringBuilder', () => 
{
    describe('constructor', () => 
    {
        it('should create an empty string array if no string is passed', () => 
        {
            const stringBuilder = new StringBuilder();
            expect(stringBuilder.toString()).to.equal('');
        });

        it('should create a StringBuilder with the given string', () => 
        {
            const stringBuilder = new StringBuilder('hello');
            expect(stringBuilder.toString()).to.equal('hello');
        });

        it('should throw a TypeError if a non-string argument is passed', () => 
        {
            expect(() => new StringBuilder(123)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('append', () => 
    {
        it('should append a string to the end of the StringBuilder', () => 
        {
            const stringBuilder = new StringBuilder('hello');
            stringBuilder.append(' world');
            expect(stringBuilder.toString()).to.equal('hello world');
        });

        it('should throw a TypeError if a non-string argument is passed', () => {

            const stringBuilder = new StringBuilder();
            expect(() => stringBuilder.append(123)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('prepend', () => 
    {
        it('should prepend a string to the beginning of the StringBuilder', () => 
        {
            const stringBuilder = new StringBuilder('hello');
            stringBuilder.prepend('hi ');
            expect(stringBuilder.toString()).to.equal('hi hello');
        });

        it('should throw a TypeError if a non-string argument is passed', () => 
        {
            const stringBuilder = new StringBuilder();
            expect(() => stringBuilder.prepend(123)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('insertAt', () => 
    {
        it('should insert a string at the specified index', () => 
        {
            const stringBuilder = new StringBuilder('hello');
            stringBuilder.insertAt(' world', 5);
            expect(stringBuilder.toString()).to.equal('hello world');
        });

        it('should throw a TypeError if a non-string argument is passed', () => 
        {
            const stringBuilder = new StringBuilder();
            expect(() => stringBuilder.insertAt(123, 2)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe('remove', () => 
    {
        it('should remove characters starting from the specified index', () => 
        {
            const stringBuilder = new StringBuilder('hello');
            stringBuilder.remove(0, 2);
            expect(stringBuilder.toString()).to.equal('llo');
        });
    });

    describe('toString', () => 
    {
        it('should return the string representation of StringBuilder', () => 
        {
            const stringBuilder = new StringBuilder('hello');
            expect(stringBuilder.toString()).to.equal('hello');
        });

        it('toString works correctly - 2', () => 
        {
            const expected = '\n A \n\r B\t123   ';
            const obj = new StringBuilder();
        
            expected.split('').forEach(s => {obj.append(s); obj.prepend(s); });
        
            obj.insertAt('test', 4);
        
            obj.remove(2, 4);
        
            expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
        });
    });
});
