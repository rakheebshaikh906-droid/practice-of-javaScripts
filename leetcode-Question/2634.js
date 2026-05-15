//https://leetcode.com/problems/filter-elements-from-array/description/
//2634. Filter Elements from Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    return arr.filter(fn);
};
console.log(filter([10, 20, 30, 40], (num) => num > 20));