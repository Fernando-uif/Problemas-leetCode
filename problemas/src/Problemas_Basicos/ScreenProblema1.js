import React from "react";

export const ScreenProblema1 = () => {
  const problema1 = () => {
    let dividend = 10;
    let divisor = 3;
    if (dividend === -2147483648 && divisor === -1) {
      return 2147483647;
    }
    //return Math.trunc(dividend / divisor);
    console.log(Math.trunc(dividend / divisor));
  };

  const problema2 = () => {
    console.log('Estamos dentro de poroblema 1')
  }
  

  return [
    <>
      <h1>Problema 1</h1>

      <h3>Haz que la función se pueda resolver mediante el form</h3>
      <h3>Haz que el form tenga un estilo y este centrado</h3>
      <h3>Resuleve con buenas practicas</h3>

      
        
    </>
  ];
};
