const chai = require('chai');
const expect = chai.expect;

const petAdoptionAgency = require('./pet_adoption_agency');

describe('petAdoptionAgency object tests', function() 
{
    describe('isPetAvailable function', function() 
    {
        it('should return error for invalid input', function() 
        {
            expect(petAdoptionAgency.isPetAvailable(1,4,true)).to.throw("Invalid input");
            expect(petAdoptionAgency.isPetAvailable("dog","not a number",true)).to.throw("Invalid input");
            expect(petAdoptionAgency.isPetAvailable("dog",4,"not a boolean")).to.throw("Invalid input");
        });

        it('no pets available for adoption', function() 
        {
            expect(petAdoptionAgency.isPetAvailable("dog",0,true)).to.equal("Sorry, there are no dog(s) available for adoption at the agency.");
        });

        it('available vaccinated pets', function() 
        {
            expect(petAdoptionAgency.isPetAvailable("dog",4,true)).to.equal("Great! We have 4 vaccinated dog(s) available for adoption at the agency.");
        });

        it('available unvaccinated pets', function() 
        {
            expect(petAdoptionAgency.isPetAvailable("cat",6,false)).to.equal("Great! We have 6 cat(s) available for adoption, but they need vaccination.");
        });
    });

    describe('getRecommendedPets function', function() 
    {
        it('should return error for invalid input', function() 
        {
            const petList = [
                {
                    name: "Max",
                    traits: "Friendly"
                },
                {
                    name: "Whiskers",
                    traits: "Independent"
                },
                {
                    name: "Buddy",
                    traits: "Loyal"
                }
            ];
            expect(petAdoptionAgency.getRecommendedPets("cat","kind")).to.throw("Invalid input");
            expect(petAdoptionAgency.getRecommendedPets(petList,4)).to.throw("Invalid input");
        });

        it('no recommended pets', function() 
        {
            const petList = [
                {
                    name: "Max",
                    traits: "Friendly"
                },
                {
                    name: "Whiskers",
                    traits: "Independent"
                },
                {
                    name: "Buddy",
                    traits: "Loyal"
                }
            ];
            expect(petAdoptionAgency.getRecommendedPets(petList,"quiet")).to.equal("Sorry, we currently have no recommended pets with the desired traits: quiet.");
        });

        it('recommended pets', function() 
        {
            const petList = [
                {
                    name: "Max",
                    traits: "Friendly"
                },
                {
                    name: "Whiskers",
                    traits: "Independent"
                },
                {
                    name: "Buddy",
                    traits: "Loyal"
                }
            ];
            expect(petAdoptionAgency.getRecommendedPets(petList,"Friendly")).to.equal("Recommended pets with the desired traits (Friendly): Max");
        });
    });

    describe('adoptPet function', function() 
    {
        it('should return error for invalid input', function() 
        {
            expect(petAdoptionAgency.adoptPet(4,"Martin")).to.throw("Invalid input");
            expect(petAdoptionAgency.adoptPet("dog",7)).to.throw("Invalid input");
        });

        it('successfully adopted pet', function() 
        {
            expect(petAdoptionAgency.adoptPet("dog","Martin")).to.equal("Congratulations, Martin! You have adopted dog from the agency. Enjoy your time with your new furry friend!");
        });
    });
});