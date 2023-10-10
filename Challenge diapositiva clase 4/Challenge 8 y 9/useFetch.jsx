import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
    error: null,
  });

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
          throw new Error('Error en la petición');
        }
        const datosObtenidos = await respuesta.json();
        setEstado({
          datos: datosObtenidos,
          cargando: false,
          error: null,
        });
      } catch (error) {
        setEstado({
          datos: null,
          cargando: false,
          error: error.message,
        });
      }
    };

    obtenerDatos();
  }, [url]);

  return estado;
};

export default useFetch;
