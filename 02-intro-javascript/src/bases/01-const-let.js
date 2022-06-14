console.log("Hola Alejandro");


//Variables y constantes (Si tengo planes de cambiar el valor lo dejo como let sino como constante)

const nombre = "Alejandro";
const apellido = "Widomlanski";

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) {
    //es otra variable este let y este const que la que esta afuera que esta en otro scope, sino no podría reescribirla.
    let valorDado = 6;
    const nombre = "Mario";
    console.log(valorDado);
    console.log(nombre);
}


console.log(valorDado); //tip ctl+barra me sugiere vs code
console.log(nombre);