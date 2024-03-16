function filterEmployees(data, criteria)
{
    let employees = JSON.parse(data);


    if(criteria === "all")
    {
        for(let i = 0; i < employees.length; i++)
        {
            console.log(`${i}. ${employees[i].first_name} ${employees[i].last_name} - ${employees[i].email}`);
        }
    }
    else
    {
        let [key, value] = criteria.split("-");

        let count = 0;

        for(let i = 0; i < employees.length; i++)
        {
            if(employees[i][key] === value)
            {
                console.log(`${count++}. ${employees[i].first_name} ${employees[i].last_name} - ${employees[i].email}`);
            }
        }
    }
}

/*
function filterEmployees(data, criteria) 
{
    let employees = JSON.parse(data);

    if (criteria === 'all') 
    {
        let count = 0;
        employees.forEach(employee => {
            console.log(`${count++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    } 
    else 
    {
        let [key, value] = criteria.split('-');
        let count = 0;

        employees.filter(employee => employee[key] === value)
                 .forEach(employee => {
                     console.log(`${count++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
                 });
    }
}
*/

let employees = `[
    {
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, 
    
    {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    }, 

   {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }
]`;

let criteria = "gender-Female";

filterEmployees(employees,criteria);