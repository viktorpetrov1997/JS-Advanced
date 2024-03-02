function fromJSONToHTMLTable(json)
{
    let array = JSON.parse(json);
    let output = "<table>\n";
    let firstObj = array[0];
    output += '<tr>';

    for(const key in firstObj)
    {
        output += `<th>${escape(key)}</th>`;
    }
    output += '</tr>\n';

    for(const obj of array)
    {
        output += '<tr>';
        for(const key in obj)
        {
            output += `<td>${escape(obj[key].toString())}</td>`;
        }
        output += '</tr>\n';
    }

    output += "</table>";

    function escape(text)
    {
        return text.replace(/[<> &"]/g, (result) => 
        {
            const map = {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                "\"": "&quot;"
            };

            if(map[result])
            {
                return result[map];
            }

            return result;
        })
    }
    
    return output;
}

fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`);