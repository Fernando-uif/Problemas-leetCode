"use strict";
function divide(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    return Math.trunc(dividend / divisor);
}
;
console.log(divide(10, 3));
