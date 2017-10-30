/**
 * @param {string} s
 * @return {string}
 */

let longestPalindrome = function(str) {
  let len = str.length;
  if (len < 2) {
    return str;
  }

  let indices = [0, 1];

  for (let i = 0; i < len - 1; i++) {
    indices = extendPalindrome(str, i, i, indices);
    if (str.charAt(i) === str.charAt(i + 1)) {
      indices = extendPalindrome(str, i, i + 1, indices);
    }
  }

  return str.slice(indices[0], indices[1]);
};

let extendPalindrome = function(str, i, j, indices) {
  while (i >= 0 && j < str.length && str.charAt(i) === str.charAt(j)) {
    i--;
    j++;
  }

  if (indices[1] - indices[0] < j - i - 1) {
    indices[0] = i + 1;
    indices[1] = j;
  }

  return indices;
};

console.log(longestPalindrome('a'));
console.log(longestPalindrome('babad'));