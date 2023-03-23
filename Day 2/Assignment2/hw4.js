/*4.  write a JS file that  has a function alpha that accepts three functions as parameters 
	the parameter function1 takes 2 strings as parameters
	the parameter function2 takes 3 numbers as parameters
       the parameter function3 takes rest parameter as parameter

     the alpha function should call the 3 functions one after the other with proper parameters.
	the functions are supposed to print all the parameters in different ways.*/

function alpha(...x)
{
   f1(x[0],x[1]);
   f2(x[2],x[3],x[4]);
   f3(...x);
}

function f1(str1,str2)
{
    console.log(str1,str2);
}

function f2(n1,n2,n3)
{
    console.log(n1,n2,n3);
}

function f3(...x)
{
    for(var i=0; i<x.length; i++)
    {
      console.log(x[i]);
    }
}

alpha(1,2,3,"sam","Shubh","pritam",25,"milind","rush");