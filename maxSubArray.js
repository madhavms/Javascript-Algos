nums = [-2,1,-3,4,-1,2,1,-5,4];

let maxSubArray = function(nums){
    let prev = 0;
    let max = -Number.MAX_VALUE;

    for(let idx = 0; idx < nums.length; idx++){
        prev = Math.max(prev+nums[idx], nums[idx]);
        max = Math.max(prev, max);
    }

    return max;
}

console.log(maxSubArray(nums));