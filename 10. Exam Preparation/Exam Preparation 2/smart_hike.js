class SmartHike
{
    constructor(username)
    {
        this.username = username;   
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitute)
    {
        if(this.goals.hasOwnProperty(peak))
        {
            return `${peak} has already been added to your goals`;
        }
        else
        {
            this.goals[peak] = altitute;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel)
    {
        if(!this.goals.hasOwnProperty(peak))
        {
            throw new Error(`${peak} is not in your current goals`);
        }

        if(this.resources === 0) 
        {
            throw new Error("You don't have enough resources to start the hike");
        }

        const resourcesAfterHike = this.resources - (time * 10);
        if(resourcesAfterHike < 0) 
        {
            return "You don't have enough resources to complete the hike";
        }

        this.resources = resourcesAfterHike;
        this.listOfHikes.push({ peak, time, difficultyLevel });

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time)
    {
        this.resources += time * 10;

        if(this.resources >= 100)
        {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria)
    {
        if(this.listOfHikes.length == 0)
        {
            return `${this.username} has not done any hiking yet`
        }

        if(criteria === "all") 
        {
            let recordMessage = "All hiking records:\n";
            this.listOfHikes.forEach((hike, index) => {
                recordMessage += `${this.username} hiked ${hike.peak} for ${hike.time} hours`;
                if(index !== this.listOfHikes.length - 1) 
                {
                    recordMessage += '\n';
                }
            });
            return recordMessage;
        }

        let hikeByDifficulty = this.listOfHikes.filter(hike => hike.difficultyLevel === criteria);
        if(hikeByDifficulty.length == 0)
        {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }

        let bestHike = this.listOfHikes[0];
        for(let i = 1; i < this.listOfHikes.length; i++)
        {
            if(this.listOfHikes[i].difficultyLevel == criteria)
            {
                if(this.listOfHikes[i].time < bestHike.time || 
                    (this.listOfHikes[i].time === bestHike.time && i < this.listOfHikes.indexOf(bestHike))) 
                {
                    bestHike = this.listOfHikes[i];
                }
            }
        }
        return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
    }
}

const user = new SmartHike('Viktor');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Botev', 1706));
console.log(user.addGoal('Musala', 2925));