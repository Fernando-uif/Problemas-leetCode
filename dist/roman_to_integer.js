"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function romanToInt(s) {
    const letters = [...s];
    console.log(letters);
    let total = 0;
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    for (let i = 0; i <= letters.length - 1; i++) {
        if (romanNumbers[letters[i]] <= romanNumbers[letters[i + 1]]) {
            total += +(romanNumbers[letters[i]]);
        }
        else {
        }
    }
    console.log(total);
    return 2;
}
romanToInt("III");
