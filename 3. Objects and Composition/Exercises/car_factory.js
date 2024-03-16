function assembleCar(order) 
{
    // Define available components
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const carriages = {
        hatchback: { type: 'hatchback', color: order.color },
        coupe: { type: 'coupe', color: order.color }
    };

    // Round down the wheel size to the nearest odd number
    const wheelsize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;

    // Find the smallest engine that meets the power requirement
    let selectedEngine = engines.find(engine => engine.power >= order.power);
    if (!selectedEngine) 
    {
        // If no engine meets the power requirement, select the most powerful one
        selectedEngine = engines[engines.length - 1];
    }

    // Assemble the car
    const assembledCar = {
        model: order.model,
        engine: selectedEngine,
        carriage: carriages[order.carriage],
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    };

    return assembledCar;
}

const order = {
    model: "VW Golf II",
    power: 90, 
    color: "blue",
    carriage: "hatchback", 
    wheelsize: 14 
};

const assembledCar = assembleCar(order);
console.log(assembledCar);
