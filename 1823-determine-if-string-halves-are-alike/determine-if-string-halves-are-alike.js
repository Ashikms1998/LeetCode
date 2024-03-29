/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let aV = 0;
    let bV = 0;
    const a = s.slice(0, Math.floor(s.length / 2));
    const b = s.slice(Math.floor(s.length / 2));
    for(let i=0;i<vowels.length;i++){
        for(let j=0;j<a.length;j++){
            if(vowels[i]===a[j]){
                aV++
            }
        }
        for(let k=0;k<b.length;k++){
            if(vowels[i]===b[k]){
                bV++
            }
        }
    }
    if(aV===bV){
        return true;
    }else{
        return false;
    };
};