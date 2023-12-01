function getLastKNumbersSequence(n, k)
{
    let sequence = [1];

    for(let i = 1; i < n; i++) 
    {
        let sum = 0;
        const startIndex = Math.max(0, i - k);
    
        for(let j = startIndex; j < i; j++) 
        {
            sum += sequence[j];
        }
        sequence.push(sum);
    }
    return sequence;
}

console.log(getLastKNumbersSequence(6,3));