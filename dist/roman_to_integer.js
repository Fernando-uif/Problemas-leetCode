"use strict";
function romanToInt(s) {
    let word = s.match(/[^IVXLCDM]/g);
    if (word)
        return 0;
    const romanNumber = [...s].map((element) => element.toUpperCase());
    let total = 0;
    const romanNumbersValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i <= romanNumber.length; i++) {
        if (romanNumbersValue[romanNumber[i]] < romanNumbersValue[romanNumber[i + 1]]) {
            total +=
                romanNumbersValue[romanNumber[i + 1]] -
                    romanNumbersValue[romanNumber[i]];
            i = i + 1;
        }
        else {
            if (romanNumbersValue[romanNumber[i]])
                total += romanNumbersValue[romanNumber[i]];
        }
    }
    return total;
}
console.log(romanToInt("MCMLXXXV"));
