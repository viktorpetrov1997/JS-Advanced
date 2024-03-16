function createAssemblyLine() 
{
    return {
        hasClima: function(car) 
        {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function() 
            {
                if(car.temp < car.tempSettings) 
                {
                    car.temp += 1;
                } 
                else if(car.temp > car.tempSettings) 
                {
                    car.temp -= 1;
                }
            };
            return car;
        },
        hasAudio: function(car) 
        {
            car.currentTrack = { name: null, artist: null };
            car.nowPlaying = function() 
            {
                if(car.currentTrack !== null) 
                {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            };
            return car;
        },
        hasParktronic: function(car) 
        {
            car.checkDistance = function(distance) 
            {
                if(distance < 0.1) 
                {
                    console.log("Beep! Beep! Beep!");
                } 
                else if(distance >= 0.1 && distance < 0.25) 
                {
                    console.log("Beep! Beep!");
                }
                else if(distance >= 0.25 && distance < 0.5) 
                {
                    console.log("Beep!");
                } 
                else 
                {
                    console.log("");
                }
            };
            return car;
        }
    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
 make: 'Toyota',
 model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);


assemblyLine.hasAudio(myCar);
myCar.currentTrack.name = "Song";
myCar.currentTrack.artist = 'Artist';
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(-10);
