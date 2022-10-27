/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0){ return false}
    const NUM = x
    let recNum = x%10 //get 個位
    x  = parseInt(x/10) //remove 個位
    while(x != 0){
        recNum = recNum * 10 //get 個位
        recNum = recNum + x%10
        x  = parseInt(x/10)
    }
    return recNum === NUM
};