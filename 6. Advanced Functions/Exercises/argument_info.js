function displayArgumentsInfo(...args) 
{
    const typesMap = new Map();
    const argsInfo = [];

    args.forEach(arg => {
        let type = typeof arg;
        argsInfo.push(`${type}: ${arg}`);

        if(!typesMap.has(type))
        {
            typesMap.set(type, 1);
        }
        else
        {
            typesMap.set(type, typesMap.get(type) + 1);
        }
    });

    argsInfo.forEach(info => console.log(info));
    const sortedTypes = Array.from(typesMap.entries()).sort((a, b) => b[1] - a[1]);
    sortedTypes.forEach(type => console.log(`${type[0]} = ${type[1]}`));
}

displayArgumentsInfo('cat', 42, function () { console.log('Hello world!'); });