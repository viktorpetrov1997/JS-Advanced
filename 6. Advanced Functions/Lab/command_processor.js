function solution() 
{
    let internalString = '';

    return {
        append: function(str) 
        {
            internalString += str;
        },
        removeStart: function(n) 
        {
            internalString = internalString.slice(n);
        },
        removeEnd: function(n) 
        {
            internalString = internalString.slice(0, -n);
        },
        print: function() 
        {
            console.log(internalString);
        }
    };
}

let firstZeroTest = solution(); 
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
