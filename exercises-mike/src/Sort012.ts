  
function subarray01(a:number[]){
   let  left:number = 0 ;
   let  mid:number =0 ;
   let right:number = a.length-1;
    while(mid<=right){

      switch(a[mid]){
                              case 0:
                              {
                                 let temp:number = a[mid];
                                 a[mid] = a[left];
                                 a[left]= temp ;
                                 mid++, left++;
                                 break;
                              }
                              case 1:
                              {
                                 mid++ ;
                                 break;

                              }
                              case 2:
                              {
                                 let temp1:number = a[mid];
                                 a[mid] = a[right];
                                 a[right]= temp1 ;
                                 right--;
                                 break;
                              }

                    }
                   
    }
     console.log(a); 
}


let v:number[]=new Array (2,0,0,0,1,1,2);
//let v:number[]=new Array (1,4,20,3,10,5);
subarray01(v);// 3000000000  