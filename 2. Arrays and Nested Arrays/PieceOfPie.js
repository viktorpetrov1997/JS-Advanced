function getPieceOfPie(flavors, firstTarget, secondTarget)
{
    let firstPieIndex = flavors.indexOf(firstTarget);
    let secondPieIndex = flavors.indexOf(secondTarget);
    let newArray = flavors.slice(firstPieIndex,secondPieIndex + 1);
    return newArray;
}

let flavors = ['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'];
console.log(getPieceOfPie(flavors,'Key Lime Pie','Lemon Meringue Pie'));