function gcd(a, b) 
{
    // Ensure both numbers are positive
    a = Math.abs(a);
    b = Math.abs(b);

    // Apply the Euclidean algorithm
    while (b !== 0) 
    {
        let temp = b;
        b = a % b;
        a = temp;
    }

    // The GCD is the last non-zero remainder
    return a;
}

console.log(gcd(15, 5));