/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const search = (start, end) => {
        if (start > end) {
            return start
        }
        const mid = start + Math.floor((end - start) / 2);
        if (nums[mid] > target) {
            return search(0, mid - 1)
        } else if (nums[mid] < target) {
            return search(mid + 1, end)
        } else {3
            return mid
        }
    }
    return search(0, nums.length - 1)
};