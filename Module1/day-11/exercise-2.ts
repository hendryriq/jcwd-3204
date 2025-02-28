function findSingleNumber(arr: number[]): number {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}


console.log(findSingleNumber([2, 2, 1]));
console.log("-----------------");
// console.log(findSingleNumber([4, 1, 2, 1, 2]));
console.log(findSingleNumber([1, 2, 2, 4, 4]));