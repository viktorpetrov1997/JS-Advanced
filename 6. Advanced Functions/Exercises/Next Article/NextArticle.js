function showNextArticle(articles)
{
    let index = 0;

    return function() 
    {
        if(index < articles.length) 
        {
            let content = document.getElementById("content");
            let article = document.createElement("article");
            article.textContent = articles[index];
            content.appendChild(article);
            index++;
        }
    };
}