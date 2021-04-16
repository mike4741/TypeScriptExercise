/*
Make this compose function work.
NOTE: Allow it to accept an arbitrary number of arguments.
*/
var compose = function (f:any, g:any) { return function (a:number) { return f(g(a)); }; };
const double =function (a:number) { return 2*a;}
const negate = function (a:number) { return -a;}
console.log(compose (double, negate)(5));
//compose(double, negate)(3);

