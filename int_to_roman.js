var intToRoman = function(num) {
    let values = [1000,500,100,50,10,5,1];
    let symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let res = '';
    let idx = 0;
    
    while(num) {
        console.log(num);
        let mult = Math.floor(num / values[idx]);
        res += symbols[idx].repeat(mult);
        num %= values[idx];
        idx++;
    }
    
    return res;   
};

console.log(intToRoman(1994));