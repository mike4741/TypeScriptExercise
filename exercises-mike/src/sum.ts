/*
Calculate the sum of all the numbers.
*/
 //the function  accept any number for argument as a number and return the sum  of it  
function sum(...a: number[]) {
     
     let result = 0;
     for (let i=0; i < a.length; i++) {
          result += a[i];
     }
     return result;
 }



 // test case 
console.log(sum(1,5,3 ,4)); // 13
console.log(sum(1,5,4)); // 10