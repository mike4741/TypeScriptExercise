function subArraySum(a:number[] , sum:number){
    let cur_sum = 0;
    let start = 0 ;
    let end = -1;
    let sumPositions = new Map(); 
    let n:number = a.length ;

     for (let i = 0 ; i<n ; i++){
         cur_sum += a[i];
         if(cur_sum-sum == 0){
             start =0;
             end = i;
             break;
         }
          if (sumPositions.has(cur_sum- sum)){
              start = sumPositions.get(cur_sum- sum)+1;
              end = i ;
              break ;
          }
          sumPositions.set(cur_sum ,i)  
          
           }
         if(end == -1){
              return [-1];
         }else 
         {
             return new Array(start , end );
         }

}

let g:number[]=new Array (10,1,-1,2,-2,-20,10);
  
 console.log( subArraySum(g , -10));