function sortArrayByTwoCriteria(arr) 
{
    const sortedArr = arr.sort((a, b) => {
      const firstCriteria = a.length - b.length;
      const secondCriteria = a.localeCompare(b);
      return firstCriteria || secondCriteria;
    });
  
    console.log(sortedArr.join("\n"));
}

const strings = ["alpha", "beta", "gamma"];

sortArrayByTwoCriteria(strings);