
// Subconjuntos de una lista

const lista = ["M","A","I",""]

// Crear la funcion para obtener los subconjuntos 
function obtenerSubconjuntos(array) {
    var resultado = []
    // Creamos una funcion que recorra el array 
    var f = function(prefixo, array) {
        // Recorremos los elementos del array 
        for (var i = 0; i < array.length; i++) {
            // Agregamos un nuevo subconjunto al array concatenando el prefixo con el elemento actual del array
            resultado.push(prefixo.concat(array[i]))
            /*se llama a una funcion f de forma recursiva, este pone de prefixo actual al anterior prefixo
            concatenando al elemento actual del array, excluye todos los elementos a
            hasta el actual*/
            f(prefixo.concat(array[i]), array.slice(i + 1))
        }
    }
    // Se hace una primera llamada a la funcion con unprefijo vacio y el array orijinal
    f([], array)
    // retornamos los subconjuntos almacenados en el resultado
    return resultado
}

// module.exports = {
//     obtenerSubconjuntos: obtenerSubconjuntos
// }

console.log(obtenerSubconjuntos(lista))
//
//
//
//
//
//
// Buscar palabra en matriz
const matriz = [["H"],["O"],["L"],["A"],["M"],["U"],["N"],["D"],["O"]]
const palabra = "HOLA"

// Crear la funcion Buscar Palabra 
function buscarPalabra(Matriz, Palabra){
        // Convertir la matriz en una sola cadena de texto para poder comparar con la palabra
        const texto = Matriz.map(fila => fila.join("")).join("")
        // Usar el método includes para ver si la palabra está en el texto, si esta devolvera true, si no se encuentra devolvera false
        return texto.includes(Palabra)
}

// module.exports = {
//     buscarPalabra: buscarPalabra
// }
// ejecutamos y mostramos en consola la funcion pasando los parametros de matriz y la palabra que se buscara
console.log(buscarPalabra(matriz, palabra))
//
//
//
//
//
//
//Comprimir cadena
const cadena = "aaaaagggtssss"

function comprimir(Cadena){

    var almacenador = {}
    // Recorremos los elementos de la cadena 
    for(var j = 0; j < Cadena.length; j++){
        //Asignamos el caracter actual en la variable caracter
        let caracter = Cadena[j]
        //verificamos si el caracter ya existe coo clave en el objeto almacenador
        if(almacenador[caracter]) {
            //si el caracter ya existe se incrementa su recuento en 1
            almacenador[caracter]++
        } else {
            // si no se agrega al objeto con un recuento = 1
            almacenador[caracter] = 1
        }
    }

    //obtenemos un array del objeto almacenador, y unimos las entradas en una cadena
    const comprimir = Object.entries(almacenador).reduce((acumulador, [clave, valor]) => acumulador + clave + valor, "")
    //retornamos el resultado en la constante comprimir
    return comprimir

}

console.log(comprimir(cadena))
module.exports = {
    obtenerSubconjuntos,
    buscarPalabra,
    comprimir
}