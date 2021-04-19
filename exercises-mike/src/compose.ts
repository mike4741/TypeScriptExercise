/*
Make this compose function work.
NOTE: Allow it to accept an arbitrary number of arguments.

Refactor to allow it to accept any number of arguments
*/

 //  function  that accept any number of function as an argument and return the result as of f(g(h(x)))
function compose(...funs:any[]) {
    return function(x: any) {
        for (let i = funs.length - 1; i >= 0; i--) {
            x = funs[i](x);
        }
        return x;
    }
}

// functions that add , negate  and double the value
const double =function (a:number) { return 2*a;}
const negate = function (a:number) { return -a;}
const add = function (a:number) { return a+10;}


// test output
console.log(compose (double, negate,add)(5));//-30

