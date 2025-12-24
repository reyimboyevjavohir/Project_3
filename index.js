//1-masala
// function longestPalindromicSubstring(s) {
//     let longest = '';
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             const substring = s.slice(i, j + 1);
//             if (substring === substring.split('').reverse().join('') && substring.length > longest.length) {
//                 longest = substring;
//             }
//         }
//     }
//     return longest;
// }
// console.log(longestPalindromicSubstring("babad")); 
//2-masala

// function rotateArray(arr, rotations) {
//     const length = arr.length;
//     rotations = rotations % length; // O'zgartirishlar sonini cheklash
//     return arr.slice(-rotations).concat(arr.slice(0, length - rotations));
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 
//3-masala

// function twoSum(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return true;
//         }
//         map.set(nums[i], i);
//     }
//     return false;
// }
// console.log(twoSum([2, 4, 1, 7], 6)); 
// console.log(twoSum([2, 4, 1, 7], 10));

//4-masala

// function hasValue(arr, value) {
//     return arr.includes(value);
// }
// console.log(hasValue([2, 4, 1, 7], 4)); 
// console.log(hasValue([2, 4, 1, 7], 5)); 

//5-masala

// function arrayDifference(arr1, arr2) {
//     return arr1.filter(x => !arr2.includes(x));
// }
// console.log(arrayDifference([2, 4, 1, 7], [4, 3, 1])); 

//6-masala

// function mostFrequent(arr) {
//     const frequency = {};
//     let maxCount = 0;
//     let mostFrequentElement = null;

//     for (const num of arr) {
//         frequency[num] = (frequency[num] || 0) + 1;
//         if (frequency[num] > maxCount) {
//             maxCount = frequency[num];
//             mostFrequentElement = num;
//         }
//     }
//     return mostFrequentElement;
// }
// console.log(mostFrequent([1, 2, 3, 1, 2])); 

//7-masala

// function extractDigits(str) {
//     return str.match(/\d/g).join('');
// }
// console.log(extractDigits("abc123")); 

//8-masala

// function longestIncreasingSubsequence(arr) {
//     const dp = Array(arr.length).fill(1);
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arr[i] > arr[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }
//     return Math.max(...dp);
// }
// console.log(longestIncreasingSubsequence([10, 20, 30, 10, 50, 20, 60, 5])); 

//9-masala

// function countOccurrences(arr) {
//     const count = {};
//     for (const num of arr) {
//         count[num] = (count[num] || 0) + 1;
//     }
//     return Object.keys(count).length;
// }
// console.log(countOccurrences([1, 2, 2, 3, 4,5,6])); 

//10-masala

// function matrixSum(matrix) {
//     return matrix.reduce((sum, row) => sum + row.reduce((a, b) => a + b, 0), 0);
// }
// console.log(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); 