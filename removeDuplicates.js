var removeDuplicates = function(nums) {
    let count = 0;
    let n = nums.length;
    
    for(let i = 1; i < n; i++){
    if(nums[i] == nums[i-1]) {count++;}
    else {nums[i-count] = nums[i]};
    console.log(String(nums));
}
    return n-count;
};
let list = [1,1,1,2,2,3,3,4,4,4,5,5];
console.log(removeDuplicates(list))