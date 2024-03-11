function manageDatabseOfTickers(arrayOfStrings, sortingCriteria)
{
    class Ticket 
    {
        constructor(destination, price, status) 
        {
          this.destination = destination;
          this.price = price;
          this.status = status;
        }
    }

    let ticketList = [];
    for(let i = 0; i < arrayOfStrings.length; i++)
    {
        let [destination, price, status] = arrayOfStrings[i].split("|");
        let ticket = new Ticket(destination, Number(price), status);
        ticketList.push(ticket);
    }

    ticketList.sort((ticket1, ticket2) => 
    {
        if(sortingCriteria === "destination") 
        {
            return ticket1.destination.localeCompare(ticket2.destination);
        } 
        else if(sortingCriteria === "price") 
        {
            return ticket1.price - ticket2.price;
        } 
        else if(sortingCriteria === "status") 
        {
            return ticket1.status.localeCompare(ticket2.status);
        } 
        else 
        {
            return 0;
        }
    });

    return ticketList;
}

let ticketList =  ['Philadelphia|94.20|available','New York City|95.99|available',
'New York City|95.99|sold','Boston|126.20|departed'];

console.log(manageDatabseOfTickers(ticketList,'destination'));
