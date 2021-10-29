import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

//   const str1 = "a x a";
//   const expected1 = true;
  
//   const str2 = "racecar";
//   const expected2 = true;
  
//   const str3 = "Dud";
//   const expected3 = false;
  
//   const str4 = "oho!";
//   const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
  function isPalindrome(str) {

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[str.length-1-i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
  }

// console.log(isPalindrome(str3));

/* 
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
    // pseudo code
    // **** lack of knowledge ****
    // after got subtrings
    // check if each substring is palindrone
    // if substring is palindrome, check if its lengest palindrone
    //      if is longest palindrome, memorize as longest palindrome

    var longest_pali = "";
    var result = [];

    for (var i = 0; i < str.length; i++) {                      // loop through string
        for (var j = i + 1; j < str.length + 1; j++) {          
            result.push(str.slice(i, j));                       // memorize substring
        }
    }
    // console.log(result);

    for (var i=0; i<result.length; i++) {
        if (isPalindrome(result[i])) {                          // check if palindrome
            if ( result[i].length > longest_pali.length ) {     // check if this palindrome is longer than longest palindrome so far
                longest_pali = result[i];                       //      store the longest palindrome
            }
        }
    }
    return longest_pali; 
}

console.log(longestPalindromicSubstring("abba"));