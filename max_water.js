var maxArea = function(height) {
    let maxValue = 0;
    let len = height.length;
    let startIdx = 0;
    let endIdx = len - 1;
    while(startIdx < endIdx){
            let newArea = (endIdx-startIdx)*(Math.min(height[endIdx],height[startIdx]))
            maxValue = Math.max(newArea, maxValue);
            if(height[startIdx] > height[endIdx]) endIdx--;
            else if(height[startIdx] <= height[endIdx]) startIdx++;
        }
    
    
    return maxValue;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));




