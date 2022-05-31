var longestCommonPrefix = function(strs) {
    let short_len = strs.reduce((a, b) => a.length <= b.length ? a : b).length;
    let match = true;
    let res = '';
    let idx = 0;
    while(match){
  
        console.log(strs[0][idx] == strs[1][idx] &&  strs[1][idx] == strs[2][idx]);
        if(strs[0][idx] === strs[1][idx] === strs[2][idx]) 
            res+= strs[0][idx];
        else 
            match = false;
        idx++;
    }
    
    return res;
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs));
