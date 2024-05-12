/**
 Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length

Brute force is to make all subarrays and calculate the longest one which satisfies the condition.
 */


// Better solution
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let len = nums.length;
    let zeroes = 0;
    let maxConsOnes = 0;
    while(right<len) {
        if (nums[right] === 0) zeroes+=1;
        while(zeroes>k) {
            if (nums[left] === 0) zeroes-=1;
            left++;
        }
    maxConsOnes = Math.max(maxConsOnes, right-left+1)
    right++;
    }
    return maxConsOnes;
};

// Time Complexity - O(2n)
// Space COmplexity - O(1)

// Optimized Solution - In above we are not incrementing left until the zeroes comes in desired range.
// Instead we reduce it with one and not update the maxlen until it comes in range. This solution slightly 
// reduces the time complexity

var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;
    let len = nums.length;
    let zeroes = 0;
    let maxConsOnes = 0;
    while(right<len) {
        if (nums[right] === 0) zeroes+=1;
        if (zeroes>k) {
            if (nums[left] === 0) zeroes-=1;
            left++;
        }
        if (zeroes<=k) {
            maxConsOnes = Math.max(maxConsOnes, right-left+1)
        } 
    right++;
    }
    return maxConsOnes;
};

// Time Complexity - O(n)
// Space Complexity = O(1)