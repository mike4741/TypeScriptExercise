/*Given a list of n-1 integers and these integers are in the range of 1 to n. There are no duplicates in list. 
One of the integers is missing in the list. Write an efficient code to find the missing integer.*/
 
 function MissingVal(...a:number[] ){
      let cnum: number = a.length+1;
      let nsum: number =0 ,asum: number = 0, mval: number = 0  ;
     
      for (let i:number = 0; i <=cnum ;i++){
          nsum +=(i);
         if (i<cnum-1)
          asum +=a[i];
      }
      mval = (nsum - asum)
      console.log(asum);  //11
      console.log(nsum);  //15
      return mval;
  
 }
//console.log(MissingVal(1,2,3,5,6));  //4
console.log(MissingVal(1,2,3,5));  //4