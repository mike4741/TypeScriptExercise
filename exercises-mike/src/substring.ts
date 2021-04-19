// Find the longest substring with no repeated characters.

const solution = (str: string) => 
{
  let start:number = 0;
  let maxLen:number = 0;
  let Map   = {}
  for (let i=0; i < str.length; i++) {
      let current:number = Map[str[i]];
      console.log("number"+Number)
      if (current!=null && start <= current) {
          start = current + 1;
      } else {
          maxLen = Math.max(maxLen, i - start + 1)
      }
      Map[str[i]] = i;
  }
  
  return maxLen;
}
  


 // test outputs 
 console.log(solution('nndNfdfdf')); // 4

