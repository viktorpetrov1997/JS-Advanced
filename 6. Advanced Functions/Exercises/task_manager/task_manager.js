function manageTasks() 
{
    const taskField = document.getElementById('task');
    const descriptionField = document.getElementById('description');
    const dateField = document.getElementById('date');

    const addButton = document.getElementById('add');

    const openArea = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    const progressArea = document.querySelectorAll('section')[2].querySelectorAll('div')[1];
    const completeArea = document.querySelectorAll('section')[3].querySelectorAll('div')[1];

    addButton.addEventListener('click', addTask);

    function addTask(e) 
    {
        e.preventDefault();

        const task = taskField.value;
        const description = descriptionField.value;
        const date = dateField.value;
    

        if(!task || !description || !date) 
        {
            return;
        }

        taskField.value = '';
        descriptionField.value = '';
        dateField.value = '';

        createArticle('OpenTask', 'green', 'red', task, description, date);
    }

    function createArticle(type, firstButtonClass, secondButtonClass, task, description, date) 
    {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = task;

        const p1 = document.createElement('p');
        p1.textContent = `Description: ${description}`;

        const p2 = document.createElement('p');
        p2.textContent = `Due Date: ${date}`;

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);

        if(type === 'OpenTask') 
        {
            const div = document.createElement('div');
            div.className = 'flex';

            const firstButton = document.createElement('button');
            firstButton.textContent = 'Start';
            firstButton.className = firstButtonClass;

            firstButton.addEventListener('click', () => {
                deleteTask(article);
                createArticle('ProgressTask', 'red', 'orange', task, description, date)
            });

            const secondButton = document.createElement('button');
            secondButton.textContent = 'Delete';
            secondButton.className = secondButtonClass;
            secondButton.addEventListener('click', () => deleteTask(article));

            div.appendChild(firstButton);
            div.appendChild(secondButton);

            article.appendChild(div);
            openArea.appendChild(article);
        } 
        else if (type === 'ProgressTask') 
        {
            const div = document.createElement('div');
            div.className = 'flex';

            const firstButton = document.createElement('button');
            firstButton.textContent = 'Delete';
            firstButton.className = firstButtonClass;

            firstButton.addEventListener('click', () => {
                deleteTask(article);
            });

            const secondButton = document.createElement('button');
            secondButton.textContent = 'Finish';
            secondButton.className = secondButtonClass;
            secondButton.addEventListener('click', () => {
                deleteTask(article);
                createArticle('CompleteTask', null, null, task, description, date)
            });

            div.appendChild(firstButton);
            div.appendChild(secondButton);

            article.appendChild(div);

            progressArea.appendChild(article);
        } 
        else if(type === 'CompleteTask') 
        {
            completeArea.appendChild(article);
        }

        function deleteTask(article) 
        {
            article.remove();
        }
    }
}
