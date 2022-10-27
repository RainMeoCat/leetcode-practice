/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length===1){return strs[0]}
    for(let i = 0;i<strs.length;i++){
        if(strs[i]===''){
                return ''
            }
    }
    let commonPrefix = ''
    let prefixFlag = 0
    commonPrefix = strs[0][0]
    for(let i = 0;i<strs[0].length;i++){
        for(let j = 1;j<strs.length;j++){
            if(strs[j]===''){
                return ''
            }
            if(commonPrefix[prefixFlag] !== strs[j][prefixFlag]){
                return commonPrefix.substring(0,commonPrefix.length-1)
            }    
        }
        if(prefixFlag<strs[0].length-1) {
            prefixFlag = prefixFlag + 1
            commonPrefix = commonPrefix + strs[0][prefixFlag]
        }
    }
    return commonPrefix
};