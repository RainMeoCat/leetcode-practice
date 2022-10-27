/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanList = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    const romanArr = s.split('')
    let intResult = 0
    for(let i = 0 ; i<romanArr.length; i++){
        if(romanList[romanArr[i]]<romanList[romanArr[i+1]]){
            intResult = intResult - romanList[romanArr[i]]
        }
        else {
            intResult = intResult + romanList[romanArr[i]]
        }
    }
    return intResult
};