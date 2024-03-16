function transformCase()
{
    let text = document.getElementById('text').value.split(' ');

    let namingConvention = document.getElementById('naming-convention').value;

    if(namingConvention === 'Camel Case')
    {
        document.getElementById('result').textContent = text.map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    }
    else if(namingConvention === 'Pascal Case')
    {
        document.getElementById('result').textContent = text.map((word, index) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
    }
    else
    {
        document.getElementById('result').textContent = 'Error!';
    }
}