 function  equilibrium( a:number[], n:number ){
    //  if (n%2 == )
   //  let  mid:number =(a.length)%2;
     let Gsum:number = 0;
     let lsum:number = 0;
     let i :number = 0 ;
     let R : number =n;
      for (i=0 ; i<R; i++){
           Gsum += a[i]
      }
      for (i=0;i<R;i++){
          Gsum -=a[i];
          if(lsum==Gsum){
              return i;
          }else 
          lsum+=a[i];
      }
     
 return -1;
    }

    let s:number[]=new Array (-7,1,5,2,-4,3,0);
  
 console.log( equilibrium(s,7));