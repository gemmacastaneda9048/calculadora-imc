import React, { useState } from 'react';
import Formulario from './Formulario';
import Resultado from './Resultado';
import './App.css';

function App() {
  const [imc, setImc] = useState(null);

  const calcularImc = (peso, altura) => {
    const imc = peso / (altura * altura);
    setImc(imc);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <Formulario onSubmit={calcularImc} />
      {imc != null && <Resultado imc={imc} />}
    </div>
  );
}

export default App;

