/* 
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. 

*/

// function runningSum(nums: number[]): number[] {
//   let saveArray: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     (!saveArray[i - 1]) ? saveArray.push(nums[i]) : saveArray.push(nums[i] + saveArray[i - 1]);

//   }
//   return saveArray;
// }
const runningSum = (nums: number[]): number[] => {
  let saveArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    !saveArray[i - 1]
      ? saveArray.push(nums[i])
      : saveArray.push(nums[i] + saveArray[i - 1]);
  }
  return saveArray;
};

runningSum([3, 1, 2, 10, 1]);
