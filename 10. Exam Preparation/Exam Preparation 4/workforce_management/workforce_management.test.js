const chai = require('chai');
const expect = chai.expect;

const workforceManagement = require('./workforce_management');

describe('workforceManagement object tests', function() 
{
    describe('recruitStaff function', function() 
    {
        it('should return error if role is different from Developer', function() 
        {
            expect(() => workforceManagement.recruitStaff("Viktor", "Support Specialist", 4)).to.throw("We are not currently hiring for this role.");
        });

        it('successfully recruited employee', function() 
        {
            expect(workforceManagement.recruitStaff("Viktor", "Developer", 7)).to.equal("Viktor has been successfully recruited for the role of Developer.");
        });

        it('candidate is not suitable for this role', function() 
        {
            expect(workforceManagement.recruitStaff("Viktor", "Developer", 2)).to.equal("Viktor is not suitable for this role.");
        });
    });

    describe('computeWages function', function() 
    {
        it('should throw error if input is a string', function() 
        {
            expect(() => workforceManagement.computeWages("2")).to.throw("Invalid hours");
        });

        it('should throw error if input is a negative number', function() 
        {
            expect(() => workforceManagement.computeWages(-1)).to.throw("Invalid hours");
        });

        it('successfully calculate wage', function() 
        {
            expect(workforceManagement.computeWages(150)).to.equal(2700);
        });

        it('successfully calculate wage with additional bonus', function() 
        {
            expect(workforceManagement.computeWages(180)).to.equal(4740);
        });
    });

    describe('dismissEmployee function', function() 
    {
        it('should throw error if workforce is not an array', function() 
        {
            expect(() => workforceManagement.dismissEmployee("Viktor", 1)).to.throw("Invalid input");
        });

        it('should throw error if employeeIndex is not a number', function() 
        {
            let workforce = ["Petar", "Ivan", "George"];
            expect(() => workforceManagement.dismissEmployee(workforce, "1")).to.throw("Invalid input");
        });

        it('should throw error if employeeIndex is a negative number', function() 
        {
            let workforce = ["Petar", "Ivan", "George"];
            expect(() => workforceManagement.dismissEmployee(workforce, -1)).to.throw("Invalid input");
        });

        it('should throw error if employeeIndex is outside the limits of the array', function() 
        {
            let workforce = ["Petar", "Ivan", "George"];
            expect(() => workforceManagement.dismissEmployee(workforce, 5)).to.throw("Invalid input");
        });

        it('successfully dismiss employee', function() 
        {
            let workforce = ["Petar", "Ivan", "George"];
            expect(workforceManagement.dismissEmployee(workforce, 1)).to.equal("Petar, George");
        });
    });
});
