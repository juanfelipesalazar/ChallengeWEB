import React from 'react';
import useFetch from './useFetch'; // Importa el custom hook

const ComponenteUsaFetch = () => {
  
  const { datos, cargando, error } = useFetch('https://api.openweathermap.org/data/2.5/weather?q=Cali,co&appid=d18cbf34e9bacfdc03a6174dad501f08'); 

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Clima en Cali, Colombia</h1>
      <p>Temperatura: {datos.main.temp}°K</p>
      <p>Condiciones: {datos.weather[0].description}</p>
    </div>
  );
};

export default ComponenteUsaFetch;
