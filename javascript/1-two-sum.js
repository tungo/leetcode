/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  const helper = {};

  for (let i = 0; i < nums.length; i++) {
    if (helper[target - nums[i]] === undefined) {
      helper[nums[i]] = i;
    } else {
      return [helper[target - nums[i]], i];
    }
  }

  return false;
};