class FashionRetailInventory
{
    constructor(storehouse, location)
    {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price)
    {
        let existingProductIndex = this.productStock.findIndex(product => product.productName == productName
            && product.size == size);

        if(existingProductIndex !== -1)
        {
            this.productStock[existingProductIndex].quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }
        else
        {
            this.productStock.push({productName, size, quantity, price});
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size)
    {
        let existingProductIndex = this.productStock.findIndex(product => product.productName == productName
            && product.size == size);

        if(existingProductIndex === -1)
        {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
        else
        {
            this.productStock.splice(existingProductIndex, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }

    findProductsBySize(size)
    {
        let matchingProducts = this.productStock.filter(product => product.size === size);

        if(matchingProducts.length === 0)
        {
            return `There are no products available in that size`;
        }
        else
        {
            let productList = matchingProducts.map(product => `${product.productName}-${product.quantity} pieces`);
            return productList.join(', ');
        }
    }

    listProducts()
    {
        if(this.productStock.length === 0)
        {
            return `${this.storehouse} storehouse is empty`;
        }

        this.productStock.sort((a,b) => a.productName.localeCompare(b.productName));
        let productList = this.productStock.map(product => 
            `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`
        );

        return `${this.storehouse} storehouse in ${this.location} available products:\n${productList.join("\n")}`;
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
