//find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum

function largestsubarraysum( ...a:number[])
{
    /*
  
   let Gmax:number = 0 ;
   let lmax : number = 0;
  // 2,4,5,-2,3,4
   for (let i :number= 0 ; i<a.length ; i++)
   { 
        if (i== 0 ) 
        { 
            lmax = a[0];
            Gmax =a[0];
        }
        if (a[i-1]< a[i-1] + a[i])
        { 
            lmax =  a[i-1] + a[i];
        }
        else { lmax = a[i]}
       
        if (Gmax < lmax)
        {
            Gmax =lmax;
        }
   
   }
   return Gmax;
  */  


    let lmax: number = 0;
    let Gmax : number = 0;
    let index :number = 0;

 for (index ; index<a.length-1;index++ ){
      lmax =lmax +a[index]
      if(lmax<0)
        lmax =0;
        else if (Gmax<lmax){
            Gmax = lmax;
        }
        
 }
      
     
return Gmax ; 
     
}
       
console.log(largestsubarraysum(-2,-3,4,-1,5));  //-1
console.log(largestsubarraysum(1,2,1,3,5,-7,1));  //7