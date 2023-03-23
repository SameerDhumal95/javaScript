/*6. Write a JS file that has a function factory 
		this function has an array of functions
		the factory function accepts an index parameter
		it will return the function at the given index to the caller
the caller will call the function .*/



function factory(i)
{

    arr=[f1(),f2(),f3()];
    
    console.log(arr[i]);
}

function f1()
{
    return 2*2;
}

function f2()
{
    return 3+3;
}

function f3()
{
    return 2/2;
}

factory(0);