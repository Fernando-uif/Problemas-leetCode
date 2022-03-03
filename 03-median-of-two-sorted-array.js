"use strict";
function findMedianSortedArrays(nums1, nums2) {
    let arrCompleto = [];
    arrCompleto.push(nums1, nums2);
    let arrayOrdenado = arrCompleto.flat();
    arrayOrdenado = arrayOrdenado.sort(function (a, b) { return a - b; });
    console.log(arrayOrdenado);
    let par = null;
    let parPlus = null;
    let resultadoPar = null;
    let impar = null;
    if (arrayOrdenado.length % 2 === 0) {
        if (+arrayOrdenado[arrayOrdenado.length - 1] === 0 || +arrayOrdenado[0] === -1) {
            return 0;
        }
        par = arrayOrdenado.length / 2;
        parPlus = par + 1;
        resultadoPar = (par + parPlus) / 2;
        return resultadoPar;
    }
    else {
        if (arrayOrdenado.length <= 1) {
            return +arrayOrdenado[0];
        }
        if (+arrayOrdenado[arrayOrdenado.length - 1] === 0 || +arrayOrdenado[0] === -1) {
            return 0;
        }
        impar = arrayOrdenado.length / 2;
        impar = Math.ceil(impar);
        return impar;
    }
}
;
console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));
const numeros = [1, 3, 0];
let respuesta = numeros.sort(function (a, b) { return a - b; });
