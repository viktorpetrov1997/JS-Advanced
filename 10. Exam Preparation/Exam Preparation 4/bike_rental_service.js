class BikeRentalService
{
    constructor(name, location)
    {
        this.name = name;
        this.location = location;
        this.availableBikes = [];
    }

    addBikes(bikes) 
    {
        let addedBikes = [];
        bikes.forEach(bikeInfo => 
        {
            const [brand, quantity, price] = bikeInfo.split('-');
            const indexOfBikeThatAlreadyExists = this.availableBikes.findIndex(bike => bike.brand === brand);
            if(indexOfBikeThatAlreadyExists !== -1) 
            {
                const bikeThatAlreadyExists = this.availableBikes[indexOfBikeThatAlreadyExists];
                bikeThatAlreadyExists.quantity += parseInt(quantity);
                if(parseFloat(price) > parseFloat(bikeThatAlreadyExists.price)) 
                {
                    bikeThatAlreadyExists.price = parseFloat(price);
                }
            } 
            else 
            {
                this.availableBikes.push({ brand, quantity: parseInt(quantity), price: parseFloat(price) });
                addedBikes.push(brand);
            }
        });

        return `Successfully added ${addedBikes.join(', ')}`;
    }

    rentBikes(selectedBikes)
    {
        let totalPrice = 0;
        let isBikeAvailable = true;

        selectedBikes.forEach(bikeInfo => 
        {
            const [brand, quantity] = bikeInfo.split('-');
            const bike = this.availableBikes.find(bike => bike.brand === brand);

            if(!bike || bike.quantity < parseInt(quantity)) 
            {
                isBikeAvailable = false;
                return;
            }

            const priceForBike = parseFloat(bike.price);
            totalPrice += priceForBike * parseInt(quantity);
            bike.quantity -= parseInt(quantity);
        });

        if(!isBikeAvailable) 
        {
            return "Some of the bikes are unavailable or low on quantity in the bike rental service.";
        }

        return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    returnBikes(returnedBikes) 
    {
        let bikeExists = true;
    
        returnedBikes.forEach(returnedBike => 
        {
            const [brand, quantity] = returnedBike.split('-');
            const bikeThatAlreadyExists = this.availableBikes.find(bike => bike.brand === brand);
    
            if(!bikeThatAlreadyExists) 
            {
                bikeExists = false;
                return;
            }
    
            bikeThatAlreadyExists.quantity += parseInt(quantity);
        });
    
        if(!bikeExists) 
        {
            return "Some of the returned bikes are not from our selection.";
        }
    
        return "Thank you for returning!";
    }
    

    revision() 
    {
        this.availableBikes.sort((a, b) => a.price - b.price);
    
        let allAvailableBikesInformation = "Available bikes:\n";

        this.availableBikes.forEach(bike => 
        {
            allAvailableBikesInformation += `${bike.brand} quantity:${bike.quantity} price:$${bike.price}\n`;
        });

        allAvailableBikesInformation += `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`;

        return allAvailableBikesInformation;
    }
}

const rentalService = new BikeRentalService("MyBikes", "CityCenter");

console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());



