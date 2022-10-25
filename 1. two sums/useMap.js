/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    var twoSum = function(nums, target) {
    let tempMap = new Map()
    for(let i=0;i<nums.length;i++){
        tempMap.set(nums[i],i)
    }
    for(let i=0;i<nums.length;i++){
        let goal=target-nums[i]
        if(tempMap.has(goal)&&i!=tempMap.get(goal)){
            return[i,tempMap.get(goal)]
        }
    }
};