function checkSpeedLimit(speed, area) 
{
    // Convert speed to a number
    speed = Number(speed);

    // Define speed limits for different areas
    const speedLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };

    // Get the speed limit for the specified area
    const limit = speedLimits[area];

    // Check if the driver is within the speed limit
    if (speed <= limit) 
    {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } 
    else 
    {
        // Calculate the difference in speeds
        const difference = speed - limit;
        let status;

        // Determine the severity of the infraction based on the difference in speeds
        if (difference <= 20) 
        {
            status = "speeding";
        } 
        else if (difference <= 40) 
        {
            status = "excessive speeding";
        } 
        else 
        {
            status = "reckless driving";
        }

        // Print the message with the severity of the infraction
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

checkSpeedLimit(40, "city");
