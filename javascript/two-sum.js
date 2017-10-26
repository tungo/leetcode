/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  var helper = {};

  for (var i = 0; i < nums.length; i++) {
    if (helper[target - nums[i]] === undefined) {
      helper[nums[i]] = i;
    } else {
      return [helper[target - nums[i]], i];
    }
  }

  return false;
};