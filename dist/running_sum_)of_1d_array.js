"use strict";
const runningSum = (nums) => {
    let saveArray = [];
    for (let i = 0; i < nums.length; i++) {
        !saveArray[i - 1]
            ? saveArray.push(nums[i])
            : saveArray.push(nums[i] + saveArray[i - 1]);
    }
    return saveArray;
};
runningSum([3, 1, 2, 10, 1]);
