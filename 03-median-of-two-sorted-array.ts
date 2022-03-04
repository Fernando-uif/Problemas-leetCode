const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const arrCompleto: object[] = [];
  arrCompleto.push(nums1, nums2);

  let arrayOrdenado = arrCompleto.flat();
  arrayOrdenado = arrayOrdenado.sort(function (a: any, b: any) {
    return a - b;
  });

  let par: number | null = null;
  let parPlus: number | null = null;
  let resultadoPar: number | null = null;

  let impar: number | null = null;
  let imparPosicion: number | null = null;

  if (arrayOrdenado.length % 2 === 0) {
    par = (arrayOrdenado.length - 1) / 2;

    par = Math.floor(par);
    let parPosicion = par;
    par = +arrayOrdenado[par];

    parPlus = +arrayOrdenado[parPosicion + 1];
    resultadoPar = (par + parPlus) / 2;

    return resultadoPar;
  } else {
    if (arrayOrdenado.length <= 1) {
      return +arrayOrdenado[0];
    }
    impar = arrayOrdenado.length;

    imparPosicion = Math.floor(impar / 2);

    return +arrayOrdenado[imparPosicion];
  }
}
