/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let k = celsius + 273.15;
    let m = celsius * 1.80 + 32
    return [k,m]
};