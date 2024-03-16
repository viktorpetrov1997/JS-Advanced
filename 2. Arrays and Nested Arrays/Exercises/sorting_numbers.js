function sortingNumbers(arrOfNums) 
{
    const sortedNums = arrOfNums.sort((numA, numB) => numA - numB);
    const result = [];
  
    while(sortedNums.length !== 0) 
    {
      const firstEl = sortedNums.shift();
      const lastEl = sortedNums.pop();
  
      result.push(firstEl, lastEl);
    }
  
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
  