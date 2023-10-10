import React, { useState, useEffect } from 'react';
import GifItem from './GifItem'; // Importar el componente GifItem

const GifGrid = ({ categoria }) => {
  const [gifs, setGifs] = useState([]);

  const obtenerGifs = async () => {
    // Asumimos que getGifs es tu función para obtener gifs
    const gifsObtenidos = await getGifs(categoria);
    setGifs(gifsObtenidos);
    console.log(gifsObtenidos); // Imprimir la lista de gifs en la consola
  };

  useEffect(() => {
    obtenerGifs();
  }, [categoria]); // Array de dependencias

  return (
    <div className="gif-grid">
      <h2>{categoria}</h2>
      {gifs.map((gif) => (
        <GifItem key={gif.id} {...gif} />
      ))}
    </div>
  );
};

export default GifGrid;
