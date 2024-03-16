function convertDistance() 
{
    let convertButton = document.getElementById('convert');

    convertButton.addEventListener("click", function()
    {
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');

        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;
        
        let distanceInMeters = 0;
        let result = 0;
        
        switch(inputUnits)
        {
            case 'km':
                distanceInMeters = inputDistance * 1000;
                break;
            case 'm':
                distanceInMeters = inputDistance;
                break;
            case 'cm':
                distanceInMeters = inputDistance * 0.01;
                break;
            case 'mm':
                distanceInMeters = inputDistance * 0.001;
                break;
            case 'mi':
                distanceInMeters = inputDistance * 1609.34;
                break;
            case 'yrd':
                distanceInMeters = inputDistance * 0.9144;
                break;
            case 'ft':
                distanceInMeters = inputDistance * 0.3048;
                break;
            case 'in':
                distanceInMeters = inputDistance * 0.0254;
                break;
      }

      switch(outputUnits)
      {
            case 'km':
                result = distanceInMeters / 1000;
                break;
            case 'm':
                result = distanceInMeters;
                break;
            case 'cm':
                result = distanceInMeters / 0.01;
                break;
            case 'mm':
                result = distanceInMeters / 0.001;
                break;
            case 'mi':
                result = distanceInMeters / 1609.34;
                break;
            case 'yrd':
                result = distanceInMeters / 0.9144; 	
                break;
            case 'ft':
                result = distanceInMeters / 0.3048;
                break;
            case 'in':
                result = distanceInMeters / 0.0254;
                break;
        }
        outputDistance.value = result;
    });
}