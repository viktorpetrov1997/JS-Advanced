function solve() 
{
    // Get all add buttons and the checkout button
    let addButtons = document.querySelectorAll('.add-product');
    let checkoutButton = document.querySelector('.checkout');
    let totalPrice = 0;
    let uniqueProducts = new Set();

    // Add click event listeners to the add buttons
    addButtons.forEach(function (addButton) 
    {
        addButton.addEventListener('click', function () 
        {
            // Get the product details
            let product = addButton.closest('.product');
            let productName = product.querySelector('.product-title').textContent;
            let productPrice = parseFloat(product.querySelector('.product-line-price').textContent);
            totalPrice += productPrice;
            uniqueProducts.add(productName);

            // Append the product to the textarea
            appendToCart(`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`);
        });
    });

    // Add click event listener to the checkout button
    checkoutButton.addEventListener('click', function () 
    {
        //All unique products added to the cart
        let productList = Array.from(uniqueProducts).join(', ');

        // Append the result to the textarea
        appendToCart(`You bought ${productList} for ${totalPrice.toFixed(2)}.`);

        // Disable all buttons after checkout
        disableButtons();
    });

    function appendToCart(text) 
    {
        // Get the textarea and append the text
        let cartTextArea = document.querySelector('textarea');
        cartTextArea.value += text;
    }
    
    function disableButtons() 
    {
        // Disable all add buttons
        addButtons.forEach(function (addButton) 
        {
            addButton.disabled = true;
        });

        // Disable the checkout button
        checkoutButton.disabled = true;
    }
}