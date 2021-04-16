// Staircase - count the ways to get to the top of the stairs.
// You can take 3, 2, or 1 steps at a time.
function climb(n:number) {
  if (n < 0)
      throw new console.error("Please add number greater 0");
  if (n === 0 || n === 1)
      return 1;
  if (n === 2)
      return 2;
  return climb(n - 3) + climb(n - 2) + climb(n - 1);
}
console.log(climb(4)); // 4
console.log(climb(3)); // 4
console.log(climb(8)); // 81
