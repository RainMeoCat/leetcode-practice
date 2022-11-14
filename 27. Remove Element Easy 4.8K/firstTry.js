/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums === null){
        return nums.length
    }
    let replaceFlag = 0
    for(i = 0; i < nums.length;i++){
        if(nums[i] !== val){
            nums[replaceFlag] = nums[i]
            replaceFlag+=1
        }
    }
    console.log(nums)
    return replaceFlag
};