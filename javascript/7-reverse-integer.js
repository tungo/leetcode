/**
 * @param {number} x
 * @return {number}
 */

const reverse = function(x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
  }

  let result = 0;
  x = Math.abs(x);

  while(x > 0) {
    result = (result * 10) +  (x % 10);
    x = Math.floor(x / 10);

    if (result > 2147483648) {
      return 0;
    }
  }

  if (isNegative) {
    result = -result;
  }

  return result;
};