var isValid = function(s) {
    
    let stack = [];

    for(let c of s){
        console.log(c);
        switch(c){
            case '{':
                stack.push('}');
                break
            case '(':
                stack.push(')');
                break
            case '[':
                stack.push(']');
                break
            
            default:
                if(c!== stack.pop()) return false;
                
                
        }
    }
    
    return true;
};

console.log(isValid('['));