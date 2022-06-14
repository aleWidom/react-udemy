//Arreglos

//const arreglo = new Array(100);

const arreglo = [1,2,3,4];

//No vamos a utilizar el push porque modifica el original vamos a usar el spread (...) 
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);


console.log(arreglo);


let arreglo2 = [...arreglo,5]

console.log(arreglo2)


//El map devuelve un nuevo arreglo, no modifica el original
const arreglo3 = arreglo2.map(function(numero) {
    return numero*2;
});


console.log(arreglo3);