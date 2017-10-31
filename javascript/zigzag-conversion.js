/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let result = '';
  let step1 = 0;
  let step2 = 0;
  let length = s.length;

  for (let i = 0; i < numRows; i++) {
    step1 = (numRows - i - 1) * 2;
    step2 = i * 2;

    let pos = i;
    if (pos < length) {
      result += s.charAt(pos);
    }

    while(true) {
      pos += step1;
      if (pos >= length) {
        break;
      }
      if (step1) {
        result += s.charAt(pos);
      }

      pos += step2;
      if(pos >= length) {
        break;
      }
      if (step2) {
        result += s.charAt(pos);
      }
    }
  }

  return result;
};

console.log(convert('PAYPALISHIRING', 3)); //'PAHNAPLSIIGYIR'
