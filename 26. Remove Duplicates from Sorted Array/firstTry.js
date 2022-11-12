/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums === null || nums.length === 1){
        return nums.length
    }
    let replaceFlag = 0
    for(i = 1; i < nums.length;i++){
        if(nums[replaceFlag] !== nums[i]){
            replaceFlag+=1
            nums[replaceFlag] = nums[i]
        }
    }
    return replaceFlag + 1
};