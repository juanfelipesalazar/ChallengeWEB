import React, { useState } from 'react';

const Contadorr = () => {
  // Inicializar el contador con un valor predeterminado de 10
  const [contador, setContador] = useState(10);

  // Función para manejar la resta
  const manejarResta = () => {
    setContador(contador - 1);
  };

  // Función para manejar el reinicio
  const manejarReinicio = () => {
    setContador(10); // Restablecer al valor predeterminado
  };

  return (
    <div>
      <h1>Nuevo Título</h1>
      <span>{contador}</span> {/* Mostrar el valor del contador */}
      <div>
        <button onClick={manejarResta}>Restar</button> {/* Botón para restar */}
        <button onClick={manejarReinicio}>Reiniciar</button> {/* Botón para reiniciar */}
      </div>
    </div>
  );
};

export default Contadorr;
