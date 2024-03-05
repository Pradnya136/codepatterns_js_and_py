// 1.Reverse words in a given string

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i” 
// let str = 'i love programming very much';
// function mynewfn(str){       
//     return str.split(" ").reverse().join(" ")   
// }

// console.log(mynewfn(str))
// -------------------------------------------------

// 2.find Longest Common Prefix using Sorting
// Input: {“apple”, “ape”, “april”}
// Output: “ap”

// let longestcompre = function(strs){
//     if(strs.length == 0){
//         return " "
//     }
//     for(let i = 0; i < strs[0].length; i++){
//         for(let j = 1; j < strs.length; j++){
//             if(strs[0][i] != strs[j][i]){
//                 return strs[0].slice(0,i)
//             }
//         }
//     }
//     return strs[0];
// }

// console.log(longestcompre(["flower", "flow", "flight", "flowwerr"]))
// ----------------------------------

// What is a string?
// How to reverse a string?
// How to check if a string is a palindrome?
// How to find the length of a string?
// How to extract a substring from a string?
// How to replace all occurrences of a character with another character in a string?
// How to split a string into an array of words?
// How to join an array of words into a string?
// How to check if a string contains a substring?
// How to convert a string to uppercase or lowercase?

// let str1 = "apple is tasty !"

// const revFn = function(str1){
//     let ans = str1.split(" ").reverse().join(" ")
//     return ans
// }
// console.log(revFn(str1))

// let str2 = "wow"
// const isPalindrome = function(str){
//     let txtt = str.toLowerCase().replace(/[^A-Za-z0-9]/g, " ");
//     let reversedWrd = txtt.split("").reverse().join("");

//     return str === reversedWrd
// }
// console.log(isPalindrome(str2))

// let str3 = "app"

// function counting(str){
//     ans = str.length
//     return ans
// }

// console.log(counting(str3))

// let str4 = "hello morning";
// const substrr = function(a){
//     ans = a.substring(2,5)
//     return ans
// }

// console.log(substrr(str4))

// How to replace all occurrences of a character with another character in a string?
// let str4 = "hello there ll"
// console.log(str4.replace(/he/g,"hi"))
// console.log(str4.replaceAll(/ll/g, "5"))


// How to split a string into an array of words?

// let str5 = "this is an array"

// const arrayofwrds = function(str){
//     ans = str.split(" ");
//     return ans
// }

// console.log(arrayofwrds(str5))

// How to join an array of words into a string?

// let str5 = ['this', 'is', 'an', 'array_array']

// console.log(str5.join("_"))
// ans = "apple".toUpperCase()
// console.log(ans)
// console.log(ans.toLowerCase())

// How to check if a string contains a substring?

// let str5 = "this is an eg of substring"
// let substrin = "this is "

// ans = str5.includes(substrin)
// console.log(ans)


// 11. counting dups Characters and storing them in key val pairs
// Input: “adsjfdsfsfjsdjfhacabcsbajda”

// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

// let str6 = `aabccc`

// const myF = function(str){
//     let arr = {};
//     for(let i = 0; i < str.length; i++){

//         if(Object.keys(arr).includes(str[i])){
//             arr[str[i]] = arr[str[i]] + 1
//             continue
//         }
//         arr[str[i]] = 1
//     }
//     return arr
// }

// console.log(myF(str6))
// -----------------------------------------------------------------------

// #12. finding first non repeated character in string
// # Input: "cbcbdde"

// # Output: e
// let str6 = `aaaabbcccccc`

// const myF = function(str){
//     let arr = {};
//     for(let i = 0; i < str.length; i++){

//         if(Object.keys(arr).includes(str[i])){
//             arr[str[i]] = arr[str[i]] + 1
//             continue
//         }
//         arr[str[i]] = 1
//     }

//     let valz = Object.values(arr)
//     let ans = Math.min(...valz)
   
//     return ans
// }

// console.log(myF(str6))
//--------------------------------------------------------------------------
// 13. reversing letters and words 
// Input: "I evol uoy os !hcum"
// Output: I love you so much!

// let str9 = "I evol uoy os !hcum";

// const revletters = function(txt){
//     const ans = txt.split(" ").map(word => word.split('').reverse().join(''));

//     return ans.join(" ")
    
// }
// console.log(revletters(str9))
// ---------------------------------------------------------------------------------

// 14.generating all permutations of string 
// Input: ABC

// Output: ABC, ACB, BCA, BAC, CAB, CBA
// let str10 = "abc"

// let str10 = "abc"

// let  perms = (str,result) => {
//     if(str.length == 0){
//         console.log(result)
//     }
//     for(let i = 0; i < str.length; i++){
//        let rest = str.substring(0,i) + str.substring(i+1);
//        perms(rest,result +str[i])
//     }
// }

// console.log(perms(str10,''))

// ------------------------------------------------------------------------

// 15. Creates a function that takes two numbers as arguments and return their sum.
// const sumFn = (a,b) => {
//     return a + b
// }

// console.log(sumFn(5,5))

//----------------------------------------------------------------------------

//16. Converts hours into seconds
// const hoursIntoSecs = (hours) => hours*3600

// console.log(hoursIntoSecs(5))

//---------------------------------------------------------------------------

//17.  Converts minutes into seconds.

// const minToSec = (min) => min*60

// console.log(minToSec(5))

// ------------------------------------------------------------------------------
// calculate area of circle with the given radius
// calculate area of sq
//calculate diameter of teh circle
// calculate circumference 
// fizzbuzz
// fibonacci
