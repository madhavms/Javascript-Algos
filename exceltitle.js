var convertToTitle = function(columnNumber) {
    let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alphabets = alphabets.split('');
    let map = {};
    for(let idx = 1; idx <= 26; idx++){
        map[idx] = alphabets[idx - 1];
    }
    
    let res = '';
    let mult = 1;
    let rem = 0;
    
    if(columnNumber <= 26) return map[columnNumber];
    else{

        mult = Math.floor(columnNumber/26);
        while(mult > 26){
            
        }
        rem = columnNumber % 26;
        return map[mult]+map[rem];
    }
};

console.log(convertToTitle(2147483647));