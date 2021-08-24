/*
915. Partition Array into Disjoint Intervals

Given an integer array nums, partition it into two (contiguous) subarrays left and right so that:
Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.

Return the length of left after such a partitioning.

Test cases are generated such that partitioning exists.

Example 1:
Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]

Example 2:
Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]

Constraints:
2 <= nums.length <= 105
0 <= nums[i] <= 106
There is at least one valid answer for the given input.
*/

/*
iterate through array to track the max of left and right subarray
the pivot index is where the last element less than max of left

      |     8
      |       7
      |   6
      | 5
    4 |
3     |
      2
  1   |
      |<- result
*/

var partitionDisjoint = function(nums) {
  let result = 0;
  let max_left = nums[0];
  let max_right = nums[0]; // current & actual max

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < max_left) {
      max_left = max_right;
      result = i;
    }
    max_right = Math.max(max_right, nums[i]);
  }

  return result + 1;
};