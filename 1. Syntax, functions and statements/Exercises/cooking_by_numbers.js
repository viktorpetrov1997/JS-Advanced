function cookingByNumbers(number, ...operations) 
{
    number = Number(number);

    for(let operation of operations) 
    {
        switch (operation) 
        {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= number * 0.2;
                break;
            default:
                break;
        }
        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');