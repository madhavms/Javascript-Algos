var removeElement = function(nums, val) {
    let count = 0;
    for(let idx = 0; idx < nums.length; idx++){
        if(nums[idx] == val) count ++;
        else nums[idx - count] = nums[idx];    
    }
    console.log(nums);
    return count;
};

let nums = [0,1,2,2,3,0,4,2];
let val = 2;

console.log(removeElement(nums, val));