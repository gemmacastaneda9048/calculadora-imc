import React, { useState } from 'react';

function Formulario({ onSubmit }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(Number(peso), Number(altura));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Peso (kg): </label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <div>
        <label>Altura (m): </label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} step="0.01" />
      </div>
      <button type="submit">Calcular IMC</button>
    </form>
  );
}

export default Formulario;
