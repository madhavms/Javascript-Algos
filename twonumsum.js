//Find two numbers in the given array that sum up to the targetsum provided
//Assume that there is only one such pair in the array

function twoNumberSum(array, TargetSum){
    for (let i = 0; i < array.length; i++) { 
        const firstNum = i;
        for (let j = i + 1; j < array.length; j++){
            const secondNum = array[j];
            if (firstNum + secondNum == TargetSum) {
                return [firstNum, secondNum];
            }
        }
    }

    return [];
}

let array = [1,2,3,4,5,6];
let TargetSum = 7;

console.log(twoNumberSum(array,TargetSum));