function generateReport() 
{
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const rows = document.querySelectorAll("tbody tr");
    const output = document.getElementById("output");

    const selectedColumns = [];
    for (let index = 0; index < checkboxes.length; index++) 
    {
        const checkbox = checkboxes[index];
        if (checkbox.checked) 
        {
            selectedColumns.push(index);
        }
    }

    const reportData = [];
    for (let i = 0; i < rows.length; i++) 
    {
        const row = rows[i];
        const rowDataObject = {};
        const cells = row.querySelectorAll("td");
        
        for (let j = 0; j < selectedColumns.length; j++) 
        {
            const columnIndex = selectedColumns[j];
            const columnName = checkboxes[columnIndex].name;
            const cellData = cells[columnIndex].textContent;
            rowDataObject[columnName] = cellData;
        }
        
        reportData.push(rowDataObject);
    }

    output.value = JSON.stringify(reportData);
}
