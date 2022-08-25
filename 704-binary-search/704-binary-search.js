/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var index = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            index = i;
        }
    }
    return index;
};