/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {
  let map = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] >= start) {
      start = map[s[i]] + 1;
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));