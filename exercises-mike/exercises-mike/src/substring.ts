// Find the longest substring with no repeated characters.
// Type your solution here

const solution = (str: string) => { let arr = str.split('')
  let start:number = 0;
  let maxLen:number = 0;
  let map  = {};
  for (let i=0; i < arr.length; i++) {
      let current:number = map[arr[i]];
      if (current!=null && start <= current) {
          start = current + 1;
      } else {
          maxLen = Math.max(maxLen, i - start + 1)
      }
        map[arr[i]] = i;
  }
  
  return maxLen;
  
  
};

console.log(solution('nndNfdfdf')); // 4
//console.log(solution('nnvb')); // 3
//console.log(solution('nnvberwasdfasd')); // 10

