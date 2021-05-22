/*
export function twoNumberSum(array: number[], targetSum: number) {
    let lsum: number = 0;
     for ( let i:number = 0  ; i<array.length-1; i++)
         {
             lsum = array[i];
              for ( let j:number = i+1; j<array.length ; j++)
              {
                   if (lsum +array[j] == targetSum )
                   return [lsum , array[j]]
                     
              }
         }
      
   return [-1, -1];
 }
 */
 export function twoNumberSum(array: number[], targetSum: number) {
     let nums = {};
     for(let num of array ){
          let pmatc = targetSum -num;
         if (pmatc in nums){
              return [pmatc ,num]
         }else 
         {
             nums[num]=true;
         }
     }
     return [-1];
 }
 

 //let v:number[]=new Array (1,4,20,3,10,5);
 twoNumberSum(v,22);// 
 console.log( twoNumberSum(v,8));  //-1