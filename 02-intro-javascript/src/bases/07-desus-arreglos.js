
const personajes = ["Goku", "Vegeta", "Trunks"];
//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);

const [ , ,p3] = personajes;
console.log(p3)   //agararría el ultimo, porque los dos primeros están vacios


const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Tarea 
//El primer valor del arreglo se llamara nombre,
//El segundo se llamara setNombre

const usoEstados = (valor) => {
    return [valor, () => {
        return ("Hola Mundo")
    }]
}

const arr = usoEstados('Goku');

const [nombre, setNombre] = arr;

console.log(nombre);
console.log(setNombre());