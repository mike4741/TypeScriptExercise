function leaderarray(a:number[]){
    console.log(a[a.length-1])
    for(let i:number =a.length-1 ;i>0 ; i--){
         if (a[i-1]<a[i])
            console.log(a[i])
       
         
    }

}

let f:number[]=new Array (2);
  
 console.log( leaderarray(f));