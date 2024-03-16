function parseTableToJSON(input) 
{
    const jsonData = [];

    for(let i = 1; i < input.length; i++) 
    {
        let [town, latitude, longitude] = input[i].split('|').filter(cell => cell.trim() !== '');
        town = town.trim();
        latitude = parseFloat(latitude).toFixed(2);
        longitude = parseFloat(longitude).toFixed(2);

        jsonData.push({
            "Town": town,
            "Latitude": parseFloat(latitude),
            "Longitude": parseFloat(longitude)
        });
    }

    return JSON.stringify(jsonData);
}

const input = ['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |'];
console.log(parseTableToJSON(input));
