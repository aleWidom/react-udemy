

const persona = {
    nombre: 'Ale',
    apellido: "Widomlanski",
    edad: 37,
    direccion: {
        ciudad: "New York",
        zip: 55321231,
        lat: 14.3232,
        lng: 34.9233321
    }
}


//Se ve mejor como esta compuesto el objeto
//console.table(persona)


//NO HACERLO NUNCA (NO ESTAMOS COPIANDO EL VALOR, ESTAMOS COPIANDO LA REFERENCIA DEL ESPACIO EN MEMORIA DE LA VARIABLE PERSONA) const persona2 = persona;


//Si quiero clonar lo que debo hacer es lo siguiente

const persona2 = {...persona};
persona2.nombre = "Mario";

console.log(persona)
console.log(persona2);




