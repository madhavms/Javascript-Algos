var convert = function(s, numRows) {
    
    let count = 1;
    let alter = '+';
    let rows = Array(numRows).fill('');
    
    if(numRows == 1 || s.length < numRows) return s;

    for(let idx = 0; idx < s.length; idx ++){
        if(count == 1 && alter == '-') {
            alter = '+';
        }
        else if(count == numRows) {
            alter = '-';
        }    
        rows[count - 1] += s[idx];
        count = alter == '+' ? count + 1: count -1; 
}
    return rows.reduce((a,b) => a+b);
}

console.log(convert('AB',1));
