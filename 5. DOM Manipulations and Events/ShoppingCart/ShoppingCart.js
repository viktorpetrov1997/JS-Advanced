function solve() 
{
    // Get all add buttons and the checkout button
    let addButtons = document.querySelectorAll('.add-product');
    let checkoutButton = document.querySelector('.checkout');

    // Add click event listeners to the add buttons
    addButtons.forEach(function (addButton) 
    {
        addButton.addEventListener('click', function () 
        {
            // Get the product details
            let product = addButton.closest('.product');
            let productName = product.querySelector('.product-title').textContent;
            let productPrice = parseFloat(product.querySelector('.product-line-price').textContent);

            // Append the product to the textarea
            appendToCart(`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`);
        });
    });

    // Add click event listener to the checkout button
    checkoutButton.addEventListener('click', function () 
    {
        // Calculate the total price and get the unique product list
        let { totalPrice, productList } = calculateTotalPriceAndList();

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

    function calculateTotalPriceAndList() 
    {
        let products = document.querySelectorAll('.product');
        let totalPrice = 0;
        let uniqueProducts = new Set();

        // Iterate through each product
        products.forEach(function (product) 
        {
            let productName = product.querySelector('.product-title').textContent;
            let productPrice = parseFloat(product.querySelector('.product-line-price').textContent);

            // Add the product to the set to get unique products
            uniqueProducts.add(productName);

            // Accumulate the total price
            totalPrice += productPrice;
        });

        // Convert the set to an array and join with ', ' for the product list
        let productList = Array.from(uniqueProducts).join(', ');

        return { totalPrice, productList };
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
