/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {

    if (nums.length === 1) {
        return nums[0]
    }

    let single = 0;

    nums.forEach(num => {
        single = single ^ num
    });

    return single;

};
