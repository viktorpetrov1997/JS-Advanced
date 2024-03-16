function printSortedNames(listOfNames) 
{
    const sortedArray = listOfNames.sort((nameA, nameB) =>
      nameA.localeCompare(nameB)
    );
  
    sortedArray.forEach((name, index) => console.log(`${index + 1}.${name}`));
}

const names = ["John", "Bob", "Christina", "Ema"];
printSortedNames(names);