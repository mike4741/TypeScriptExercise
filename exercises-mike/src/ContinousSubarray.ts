//Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number.

import { join } from "path";
import { isBreakStatement } from "typescript";
import { inflate } from "zlib";

/*

    function subarray(a:number[] , sum:number)  {
         let lsum:number = 0;
        let index:number = 0;
        let j:number = 0;
        let initial:number=0;
        let final:number;
        let arr:number[];

       for (let i:number =1 ; i<a.length;i++){

        lsum =a[i];
         for (let j : number =i+1;j<=a.length ;j++)
             {
                  if (lsum ==sum)
                  {
                       initial =i;
                       final = j-1;
      
                  }
                   if(lsum>sum|| j== a.length){
                      break; 
                   }
                   
                lsum+=a[j]

             }
             
         }
          console.log(initial);// 2 
          console.log(final);// 4 
       }
          
                 //console.log(initial);// 2 
                // console.log(final);// 4 
              
       */     
    // solution two

   /* 
 function SubArraySum(a:number[],sum:number)
 {
     
     let lsum :number =0 , left: number  =0, right: number = 0  ;
       
     for (right =0 ; right<=a.length;right++)
        {
            while (lsum>sum && left<right-1)
            {
              lsum = lsum-a[left];
              left++;
            }
        
             if (lsum == sum)
                {  
                  right = right-1;   
                  console.log(left);// 2 
                  console.log(right);// 4 
                  return 1;
                }
             if (right<a.length)
                 lsum = lsum+a[right];
            // if (lsum>sum && left<right-1)
               
             
     
        }       
        console.log(" no sub array found ");// 4 
       return 0;  
 }

   let v:number[]=new Array (2,2,0,0,0,10,10,5);
   //let v:number[]=new Array (1,4,20,3,10,5);
   SubArraySum(v,22);// 3000000000  

  let q:number[]=new Array (1,4,0,0,3,10,5);
  subarray(q,7);// 3000000000  

  */
  function SubArraySum(a:number[],sum:number)
  {
     let lsum:number =a[0];
     let left:number =0 ;
     let right:number =0;
     let alen :number = a.length;
     
       while(right<=alen && sum != lsum){
          if(sum >lsum){
             lsum +=a[right];
             right ++;
          }
          else if(sum<lsum)
          {
             lsum -=a[left];
             left++;
          }
         }
       if(sum == lsum){
           return new Array (left-1 , right-1);
          }else
          return[-1,-1];
       }
  
       let q:number[]=new Array (1,4);
 // let q:number[]=new Array (1,4,0,0,3,10,5,4);
  //SubArraySum(q,7);// 3000000000
  console.log( SubArraySum(q,2))