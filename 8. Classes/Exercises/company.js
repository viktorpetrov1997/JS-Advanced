class Company
{
    constructor()
    {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) 
    {
        if(!name || !salary || !position || !department || salary < 0 || name === "" || position === "" || department === "") 
        {
            throw new Error("Invalid input!");
        }
        
        if(!this.departments[department]) 
        {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() 
    {
        let maxAverageSalary = 0;
        let bestDepartment = '';

        for(let department in this.departments)
        {
            let employees = this.departments[department];

            let totalSalary = 0;
            for(let i=0; i< employees.length; i++)
            {
                totalSalary += employees[i].salary;
            }

            let averageSalary = totalSalary / employees.length;

            if(averageSalary > maxAverageSalary)
            {
                maxAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }

        const result = `Best Department is: ${bestDepartment}\n`;
        const avgerageSalaryString = `Average salary: ${maxAverageSalary.toFixed(2)}\n`;
        
        const sortedEmployees = this.departments[bestDepartment].sort((a, b) => 
        {
            if(b.salary !== a.salary) 
            {
                return b.salary - a.salary;
            } 
            else 
            {
                return a.name.localeCompare(b.name);
            }
        });
        
        const employeeInfo = sortedEmployees.map(emp => `${emp.name} ${emp.salary} ${emp.position}`).join('\n');
        return result + avgerageSalaryString + employeeInfo;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());