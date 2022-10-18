/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringNum = x.toString();
    let stringFlip = '';
    for (var i = stringNum.length - 1; i !== -1; i--) {
    stringFlip += stringNum[i];
}
    if (Number(stringFlip) === x) {
    return true
} else {
    return false;
}
};