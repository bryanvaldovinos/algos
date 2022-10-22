/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
  const digLength = digits.length;
    let one = 1;

    if (digLength === 0) {
        return [one];
    }

    for (let i = digLength - 1; i >= 0; i--) {
        if (one !== 0) {
            let singleEl = digits[i] + one;
            if (singleEl > 9) {
                one = 1;
                digits[i] = 0;
            } else {
                one = 0;
                digits[i] = singleEl;
            }
        }
    }

    if (one === 1) {
        digits.unshift(one);
    }

    return digits;
    
};