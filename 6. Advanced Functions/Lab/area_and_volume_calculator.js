function calculateAreaAndVolume(areaFunc, volFunc, coordinates)
{
    const parsedCoordinates = JSON.parse(coordinates);

    let results = [];

    for(let i = 0; i < parsedCoordinates.length; i++)
    {
        let x = parseFloat(parsedCoordinates[i].x);
        let y = parseFloat(parsedCoordinates[i].y);
        let z = parseFloat(parsedCoordinates[i].z);

        let area = areaFunc.call({x , y});
        let volume = volFunc.call({x , y, z});

        results.push({area, volume});
    }

    return results;
}

/*
function calculateAreaAndVolume(areaFunc, volFunc, figures) 
{
    const parsedFigures = JSON.parse(figures);
  
    const result = [];
  
    parsedFigures.forEach(figure => {
      const x = parseFloat(figure.x);
      const y = parseFloat(figure.y);
      const z = parseFloat(figure.z);
  
      const area = areaFunc.call({ x, y });
      const volume = volFunc.call({ x, y, z });
  
      result.push({ area, volume });
    });
  
    return result;
}
*/
  
function area() 
{
    return Math.abs(this.x * this.y);
}
  
function vol() 
{
    return Math.abs(this.x * this.y * this.z);
}
  
const result = calculateAreaAndVolume(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`);
  
console.log(result);

  