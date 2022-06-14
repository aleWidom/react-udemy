
let activo = true;

//const mensaje = (activo === true) ? "Activo" : "Inactivo";

//Es lo mismo que hacer
const mensaje = (activo) ? "Activo" : "Inactivo";


//Otra forma de realizarlo más corta si se cumple se muestra sino mostrara false
const mensaje2 = (!activo) && "Activo";  //Mostrara la palabra Activo porque cumple, sino mostrara false.


console.log(mensaje);
console.log(mensaje2);
