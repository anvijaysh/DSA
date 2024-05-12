// Max Subarray Len whose sum is less than provided k


// --------------------------------*-------------------------------------------*--------------------------------------------------

// Brute Force  - From All subarrays calculate sum and then take the one with largest length
// Time Complexity - O(n2)
// Space Complexity - O(1)

// --------------------------------*-------------------------------------------*--------------------------------------------------

// Better - Sliding window solution

// Time Complexity - O(n + n) - O(2n)
// Space Complexity - O(1)
function slidingWindow(arr, k) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let maxLen = 0;
    while(r < arr.length) {
            sum  = sum + arr[r];
        while (sum > k) {
            sum = sum - arr[l];
            l++;
        }
        if (sum <= k) {
            maxLen = Math.max(maxLen, r-l+1);
        }
        r++;
    }
    return maxLen;
}

console.log(slidingWindow([5,2,3,4,1,6], 12))


// --------------------------------*-------------------------------------------*--------------------------------------------------


/* Optimized Solution -

This solution will only work if we are asked to calculate only the length and not the subarray because instead of trimming on
to a size less than maxLen we keep the size intact only if it expands.
*/

// Time Complexity - O(n)
// Space Complexity - O(1)
function slidingWindow(arr, k) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let maxLen = 0;
    if (r < arr.length) {
            sum  = sum + arr[r];
        while (sum > k) {
            sum = sum - arr[l];
            l++;
        }
        if (sum <= k) {
            maxLen = Math.max(maxLen, r-l+1);
        }
        r++;
    }
    return maxLen;
}

console.log(slidingWindow([5,2,3,4,1,6], 12))