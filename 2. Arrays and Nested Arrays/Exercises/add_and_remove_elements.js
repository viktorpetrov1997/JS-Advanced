function addAndRemoveElements(commands)
{
    let result = [];
    let number = 1;

    for(let i = 0; i < commands.length; i++)
    {
        if(commands[i] === "add")
        {
            result.push(number);
        }
        else
        {
            result.pop();
        }
        ++number;
    }

    if(result.length === 0)
    {
        console.log("Empty");
    }
    else
    {
        console.log(result.join("\n"));
    }
}

let commands = ['add','add','remove','add','add'];

addAndRemoveElements(commands);
