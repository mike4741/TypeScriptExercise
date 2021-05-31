 function frequency(a:number[]){
    let nums = {};
    for(let i:number=0 ; i<a.length-1 ; i++ ){
        if(a[i]  in  nums){
           nums[a[i]] =  1;
        }
    }
 }