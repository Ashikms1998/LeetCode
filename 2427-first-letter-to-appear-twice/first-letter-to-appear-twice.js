/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let ans = '';
    let visited = [];
    for(let i of s) {
        if(!visited.includes(i)) {
            visited.push(i);
        } else if(visited.includes(i)) {
            ans = i;
            break;
        }
    }
    return ans;
}