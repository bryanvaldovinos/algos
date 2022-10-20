/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let curr = 0;
    let count = 1;

    for (var i = 1; i < nums.length; i++) {
    if (nums[i] === nums[curr]) {
        count++;
    } else {
        count--;   
    }

    if (count === 0) {
        curr = i;
        count = 1;
    }
    }
    return nums[curr]
};