/**
 *Compute the of all the numbers in a 1D Array
* @param {number[]} nums
* @returns {number}
*/
function sum1DArray(nums) {
    if (!Array.isArray(nums)) {
        throw new TypeError('Input must be an array ');
    }
    return nums.reduce((acc,val) => acc + Number(val),0);
}

module.exports = sum1DArray;