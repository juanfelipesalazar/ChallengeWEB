import React, { useState } from 'react';

const FirstApp = () => {
  // Inicializar el estado para el campo de entrada de categoría y la lista de categorías
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);

  // Manejar los cambios en el campo de entrada
  const manejarCambioInput = (evento) => {
    setCategoria(evento.target.value);
  };

  // Manejar el clic en el botón para añadir categoría
  const manejarAgregarCategoria = () => {
    setCategorias([...categorias, categoria]); // Añadir nueva categoría a la lista de categorías
    setCategoria(''); // Limpiar el campo de entrada
  };

  return (
    <div>
      <h1>tittle</h1>
      <span>10</span>
      <div>
        <input 
          type="text" 
          value={categoria} 
          onChange={manejarCambioInput} 
          placeholder="Escribe una categoría"
        />
        <button onClick={manejarAgregarCategoria}>Añadir Categoría</button>
      </div>
      <div>
        <h2>Categorias:</h2>
        <ul>
          {categorias.map((cat, indice) => (
            <li key={indice}>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FirstApp;
