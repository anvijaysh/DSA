/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
    const str = s.split("");
    let i = 0;
    let j = 0;
    let maxLenSubstr = 0;
    let strHash = {};
    while(j < str.length) {
       if (str[j] in strHash && strHash[str[j]] >= i) i = strHash[str[j]] + 1;
       strHash[str[j]] = j;
       maxLenSubstr = Math.max(maxLenSubstr, j-i+1);
       j++;
    }
    return maxLenSubstr;
};