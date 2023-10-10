import { useState } from 'react';

const useContador = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(valorInicial);
  };

  return [contador, incrementar, restar, reiniciar];
};

export default useContador;
