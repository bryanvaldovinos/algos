/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const total = m + n
  nums1.splice(total-n)
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i])
  }
    
  for (let j = 1; j < total; j++) {
    if (nums1[j-1] || nums1[j-1] === 0) {
      if (nums1[j] < nums1[j-1]) {
        let temp = nums1[j-1]
        nums1[j-1] = nums1[j]
        nums1[j] = temp
        j = j-2
      }
    }
  }
};