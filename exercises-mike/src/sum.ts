/*
Calculate the sum of all the numbers.

Refactor this to allow it to accept any number of arguments.
*/

 //accept any number of argument and retune the sum of the numbers 
function sum(...a:number[]) {
    var total:number = 0;
    for (var i:number=0; i < a.length; i++) {
    total += a[i];
    }
    return total; 
}


//test output 
console.log(sum(1000000000,1000000000,1000000000)); // 3000000000
