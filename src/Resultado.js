import React from 'react';

function Resultado({ imc }) {
  let interpretacion = '';

  if (imc < 18.5) {
    interpretacion = 'Desnutrición';
  } else if (imc < 24.9) {
    interpretacion = 'Normopeso';
  } else if (imc < 29.9) {
    interpretacion = 'Sobrepeso';
  } else if (imc < 34.9) {
    interpretacion = 'Obesidad tipo 1';
  } else if (imc < 39.9) {
    interpretacion = 'Obesidad tipo 2';
  } else {
    interpretacion = 'Obesidad tipo 3';
  }

  return (
    <div>
      <h2>IMC: {imc.toFixed(2)}</h2>
      <p>{interpretacion}</p>
    </div>
  );
}

export default Resultado;
