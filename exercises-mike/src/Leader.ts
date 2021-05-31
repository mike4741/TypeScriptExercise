function leaderarray(a:number[]){
   let maxR:number= a[a.length-1];
   let newa:number []=[];
   newa.push(a[a.length-1]);
    console.log(maxR +" ")
    for(let i:number =a.length-2 ;i>=0 ; i--){
         if (a[i]>maxR){
             maxR  =a[i];
             newa.push(a[i]);
 
             console.log(maxR + " ");
         }
            
        
         
    }
 return newa;
} 

let f:number[]=new Array (16,17,4,8,3,7,5,2);
  
 console.log( leaderarray(f));