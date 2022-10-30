var removeDuplicates = function(nums) {
    let n = nums.length;
    
    let numsSet = new Set(nums);
    let temp_nums = [...numsSet];
    console.log(temp_nums)
    
    for(let idx = 0; idx < numsSet.size; idx++){
        nums[idx] = temp_nums[idx]
    }
    console.log(nums)
    return numsSet.size;
};
let list = [1,1,2];
console.log(removeDuplicates(list))