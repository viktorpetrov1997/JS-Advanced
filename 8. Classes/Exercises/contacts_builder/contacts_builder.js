class Contact 
{
    constructor(firstName, lastName, phone, email) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) 
    {
        const container = document.getElementById(id);

        const article = document.createElement('article');

        const titleDiv = document.createElement('div');
        titleDiv.id = `${this.firstName}-${this.lastName}-title`; // Assigning an id
        const titleText = document.createTextNode(`${this.firstName} ${this.lastName}`);
        const toggleButton = document.createElement('button');

        const infoDiv = document.createElement('div');
        const phoneSpan = document.createElement('span');
        const emailSpan = document.createElement('span');

        titleDiv.classList.add('title');
        titleDiv.appendChild(titleText);
        toggleButton.innerHTML = '&#8505;';
        titleDiv.appendChild(toggleButton);
        article.appendChild(titleDiv);

        phoneSpan.innerHTML = `&phone; ${this.phone}`;
        emailSpan.innerHTML = `&#9993; ${this.email}`;

        infoDiv.classList.add('info');
        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);

        article.appendChild(infoDiv);
        container.appendChild(article);

        // Initially hide the info div
        infoDiv.style.display = 'none';

        toggleButton.addEventListener('click', () => 
        {
            if(infoDiv.style.display === 'none') 
            {
                infoDiv.style.display = 'block';
            }
            else 
            {
                infoDiv.style.display = 'none';
            }
            this.setOnline(!this.online);
        });
    }

    setOnline(isOnline) 
    {
        this.online = isOnline;
        const titleDiv = document.getElementById(`${this.firstName}-${this.lastName}-title`);
        if(titleDiv) 
        {
            titleDiv.classList.toggle('online', isOnline);
        }
    }
}
