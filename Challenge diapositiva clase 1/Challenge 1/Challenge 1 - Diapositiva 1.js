// Diferencias entre funciones de flecha y funciones regulares

// 1. Sintaxis
// Función Regular
function sumarRegular(a, b) {
    return a + b;
  }
  
  // Función de Flecha
  const sumarFlecha = (a, b) => a + b;
  
  // 2. Palabra clave 'this'
  // Demostrado más abajo en el código
  
  // 3. Objeto de argumentos
  // Demostrado más abajo en el código
  
  // 4. Constructor
  // Las funciones de flecha no pueden usarse como constructores
  
  // 5. Prototipo
  // Las funciones de flecha no tienen una propiedad de prototipo
  
  // 6. Definiciones de métodos
  // Demostrado más abajo en el código
  
  // 7. Elevación (Hoisting)
  // Las funciones regulares son elevadas, las funciones de flecha no
  
  // Implementación de una función para verificar si un número es impar o par
  
  // Función Regular
  function verificarImparOParRegular(num) {
    if (num % 2 === 0) {
      console.log("El número es par.");
    } else {
      console.log("El número es impar.");
    }
  }
  
  // Función de Flecha
  const verificarImparOParFlecha = (num) => {
    if (num % 2 === 0) {
      console.log("El número es par.");
    } else {
      console.log("El número es impar.");
    }
  };
  
  // Uso de las funciones
  verificarImparOParRegular(10);  // Salida: "El número es par."
  verificarImparOParRegular(11);  // Salida: "El número es impar."
  
  verificarImparOParFlecha(10);  // Salida: "El número es par."
  verificarImparOParFlecha(11);  // Salida: "El número es impar."
  