//https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
//2365. Apply Transform Over Each Element in Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    return arr.map((n) => fn(n));
};
console.log(map([1, 2, 3, 4], (n) => n * 2));
