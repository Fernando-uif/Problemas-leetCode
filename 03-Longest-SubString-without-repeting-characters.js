"use strict";
function lengthOfLongestSubstring(s) {
    let arr = [];
    let palabra = "";
    let arr2 = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    arr2.push(arr[0]);
    for (let i = 0; i <= arr2.length - 1; i++) {
        if (arr2[i] !== arr[i]) {
            console.log("Estamos dentro del if");
        }
    }
    console.log(arr2, arr, "Tenemos los arreglos");
    return 0;
}
lengthOfLongestSubstring("abcabcbb");
