/*Print the elements of an array in the decreasing frequency
 if 2 numbers have same frequency then print the one which came first.*/

  function decFrequency(a:number[]){
       let n :number = a.length;
        let map = new Map();
      for(let i = 0 ; i<n ; i++){
         map.put(i,map.getOrDefault(i,0)+1); 
      }
      
      return (arr)
      
  }