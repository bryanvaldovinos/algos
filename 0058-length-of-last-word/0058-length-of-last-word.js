/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sTrim = s.trim();
    const splitS = sTrim.split(' ');
    const lastI = splitS.length - 1;
    return splitS[lastI].length
};