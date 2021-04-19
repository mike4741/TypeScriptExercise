/*
Make this compose function work.
NOTE: Allow it to accept an arbitrary number of arguments.
Refactor to allow it to accept any number of arguments.
*/

//This function accept any number of function and return the output . Example like f(g(h(x))))


function compose(...funs:any[]) {
    return function(x: any) {
        for (let i:number = funs.length - 1; i >= 0; i--) {
            x = funs[i](x);
        }
        return x;
    }
}



/*  for test case   their are three function  
        double : that double the number it accept 
        negate : that negate the number it accept 
        add : that add 10 to the  number it accept 
*/
const double =function (a:number) { return 2*a;}
const negate = function (a:number) { return -a;}
const add = function (a:number) {return a+10}

// test output 
console.log(compose (double, negate,add)(5)); //-30