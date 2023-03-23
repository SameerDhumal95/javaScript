/*5.  Write a JS file that has a function factorial that accepts a num with a default 
value 2. the function returns the factorial of the number. call the function 1) without passing parameter, 2 )with a single parameter , print the return value*/

function factorial(num=2)
{
    var fact=1;
    for(var i=1; i<=num; i++)
    {
        fact = fact * i; 
    }
    return fact;
}

console.log(factorial(4));
console.log(factorial());