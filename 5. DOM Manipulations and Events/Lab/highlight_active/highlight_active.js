function focused() 
{
    let inputElements = document.querySelectorAll('div div input');

    for(let element of inputElements) 
    {
        element.addEventListener('focus', (e) => 
        {
            e.target.parentNode.classList.add('focused');            
        });

        element.addEventListener('blur', (e) => 
        {
            e.target.parentNode.classList.remove('focused');
        });
    }
}

/*function focused() 
{
    const container = document.querySelector('div');
    
    container.addEventListener('focus', (e) => {
        if (e.target.matches('input')) {
            e.target.parentNode.classList.add('focused');
        }
    }, true); // Use capturing phase
    
    container.addEventListener('blur', (e) => {
        if (e.target.matches('input')) {
            e.target.parentNode.classList.remove('focused');
        }
    }, true); // Use capturing phase
}*/