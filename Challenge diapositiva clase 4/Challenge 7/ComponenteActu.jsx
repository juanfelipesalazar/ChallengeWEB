import React from 'react';
import useContador from './useContador'; // Importa el custom hook

const ComponenteActu = () => {
  const [contador, incrementar, restar, reiniciar] = useContador(10); // Usa el custom hook

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default ComponenteActu;
