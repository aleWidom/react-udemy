
const nombre = "Alejandro";
const apellido = "Widomlanski"

//const nombreCompleto = nombre + " " + apellido;

//Lo que pongo dentro de ${es codigo de javascript}.
const nombreCompleto = `Hola ${nombre} ${apellido} tenés ${34+3} años.` 

console.log(nombreCompleto);


function getSaludo(nombre) {
    return "Hola " + nombre;
}


console.log(`Este es un texto: ${getSaludo("Alito")}`)