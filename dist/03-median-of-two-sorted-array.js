"use strict";
const findMedianSortedArrays = (nums1, nums2) => {
    const arrCompleto = [];
    arrCompleto.push(nums1, nums2);
    let arrayOrdenado = arrCompleto.flat();
    arrayOrdenado = arrayOrdenado.sort(function (a, b) {
        return a - b;
    });
    let par = null;
    let parPlus = null;
    let resultadoPar = null;
    let impar = null;
    let imparPosicion = null;
    if (arrayOrdenado.length % 2 === 0) {
        par = (arrayOrdenado.length - 1) / 2;
        par = Math.floor(par);
        let parPosicion = par;
        par = +arrayOrdenado[par];
        parPlus = +arrayOrdenado[parPosicion + 1];
        resultadoPar = (par + parPlus) / 2;
        return resultadoPar;
    }
    else {
        if (arrayOrdenado.length <= 1) {
            return +arrayOrdenado[0];
        }
        impar = arrayOrdenado.length;
        imparPosicion = Math.floor(impar / 2);
        return +arrayOrdenado[imparPosicion];
    }
};
