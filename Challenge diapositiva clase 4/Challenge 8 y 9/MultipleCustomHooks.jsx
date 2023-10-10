import React from 'react';
import useFetch from './useFetch';
import useContador from './useContador';

const MultipleCustomHooks = () => {
  const [contador, incrementar] = useContador(1); // Inicializa el contador en 1

  const { datos, cargando } = useFetch(`https://breakingbadapi.com/api/quotes/${contador}`);

  return (
    <div>
      <h1>Frases de Breaking Bad</h1>
      <button onClick={incrementar}>Siguiente frase</button>

      {cargando ? (
        <div>Cargando...</div>
      ) : (
        <blockquote>
          <p>{datos[0]?.quote}</p>
          <footer>{datos[0]?.author}</footer>
        </blockquote>
      )}
    </div>
  );
};

export default MultipleCustomHooks;
