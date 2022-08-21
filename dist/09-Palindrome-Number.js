"use strict";
function isPalindrome(x) {
    let arr = [];
    let numberString = x + "";
    for (let i = 0; i < numberString.length; i++) {
        arr.push(numberString[i]);
    }
    let arrVolteado = arr.slice();
    arrVolteado = arrVolteado.reverse();
    let arr2 = arr.join('');
    let arrVolteado2 = arrVolteado.join('');
    if (arr2 === arrVolteado2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPalindrome(121));
