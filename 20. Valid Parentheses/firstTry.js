/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let bracStack = []
    for(let i = 0;i<s.length;i++){
        if(s[i] === '}' && bracStack.at(-1) === '{'){
            bracStack.pop()
        }else if(s[i] === ')' && bracStack.at(-1) === '('){
            bracStack.pop()
        }else if(s[i] === ']' && bracStack.at(-1) === '['){
            bracStack.pop()
        }else{
            bracStack.push(s[i])
        }
    }
    console.log(bracStack)
    if(bracStack.length===0){
        return true
    }else{
        return false
    }
};