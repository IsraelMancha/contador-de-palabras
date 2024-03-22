/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function wordCounter(cadena){
    
    // comenzar por eliminar lo que NO necesitamos: mayusculas, signos de puntuacion
    cadenaLimpiada = cadena.replace(/[^\w\s]|_/g, "");
    cadenaFinal = cadenaLimpiada.toLowerCase();

    // separo las palabras con base en los espacios
    palabras = cadenaFinal.split(" ");

    recuento = {};

    palabras.forEach((item) =>{
        
        if (item in recuento){
            recuento [item]++;
        }
        else {
            recuento [item] = 1;
        }
    });
    console.log(recuento);
}

wordCounter("Este es un ejemplo del contador de palabras");