function hydrateWorker(worker)
{
    if(worker.dizziness === true)
    {
        let neededAmountOfWater = (0.1 * worker.weight) * worker.experience;
        worker.levelOfHydrated += neededAmountOfWater;
        worker.dizziness = false;
        return worker;
    }
    return worker;
}

let worker = 
{
weight: 120,
experience: 20,
levelOfHydrated: 200,
dizziness: true
};


console.log(hydrateWorker(worker));
