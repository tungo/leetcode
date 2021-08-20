/*
340. Longest Substring with at most K distinct characters

Given a string s and a inter k,
return the length of the longest substring of s
that contains at most k distinct characters.

Example 1:
Input: s = "eceba",  k = 2
Output: 3
Explanation: ;The substring is "ece" with length 3.

Example 2:
Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.

Constraints:

1 <= s.length <= 5 * 10^4
0 <= k <= 50
*/

/*
sliding window solution
use 2 pointer i j to track the longest string
  i, j start at 0
  move j to end string
    calculate the string and length and distinct chracter
    move j if string still qualify
    move i if string not qualify
*/

const lengthOfLongestSubstringKDistinct = (s, k) => {
  let result = 0;
  let i = 0;
  let j = 0;
  const store = {};
  let counter = 0;

  while (j < s.length) {
    let right_char = s.charAt(j);
    if (store[right_char] === undefined) {
      store[right_char] = 1;
      counter += 1;
    } else {
      store[right_char] += 1;
    }

    while (counter > k) {
      let left_char = s.charAt(i);
      if (store[left_char] === 1) {
        delete store[left_char];
        counter--;
      } else {
        store[left_char] -= 1;
      }
      i += 1;
    }

    result = Math.max(result, j - i + 1);

    j += 1;
  }

  return result;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
console.log(lengthOfLongestSubstringKDistinct("ecebee", 2));
console.log(lengthOfLongestSubstringKDistinct("aa", 1));