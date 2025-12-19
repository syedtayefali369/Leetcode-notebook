/**You are given two strings word1 and word2. 
* Merge the strings by adding letters in alternating order, starting with word1. 
* If a string is longer than the other, append the additional letters onto the end of the merged string.
* Return the merged string.

/**
 * Merge the strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters onto the end of the merged string.
 * @param {string} word1
 * @param {string} word2
 * @returns {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = "";
    let i = 0;

    while (i < word1.length && i <word2.length){
        result += word1[i] + word2[i];
        i++;
    }
    while (i < word1.length){
    result += word1[i];
    i++;
    }
    while (i < word2.length){
        result += word2[i];
        i++;
    }
    return result;
};

// Test cases
console.log("Test 1: mergeAlternately('abc', 'pqr')");
console.log("Output:", mergeAlternately('abc', 'pqr'));
console.log("Expected: apbqcr\n");

;