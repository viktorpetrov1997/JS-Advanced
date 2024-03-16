function createListProcessor(commands) 
{
    let innerCollection = [];

    for(let i = 0; i < commands.length; i++)
    {
        const parts = commands[i].split(" ");
        const action = parts[0];

        switch(action) 
        {
            case "add":
                const itemToAdd = parts[1];
                innerCollection.push(itemToAdd);
                break;
            case "remove":
                const itemToRemove = parts[1];
                innerCollection = innerCollection.filter(item => item !== itemToRemove);
                break;
            case "print":
                console.log(innerCollection.join(","));
                break;
        }
    }
}

const commands = ['add hello', 'add again', 'remove hello', 'add again', 'print'];

createListProcessor(commands); 
