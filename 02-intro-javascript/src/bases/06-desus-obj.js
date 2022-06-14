
//Desestructuración

const persona = {
    nombre: "Ale",
    edad: 37,
    clave: "Wisa"
}

//Extrae de persona en este caso la propiedad nombre y se guarda en la constante nombre

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);


//Extrae de persona en este caso la propiedad nombre y se guarda en la constante nombre
const {nombre} = persona
console.log(nombre)



const equipoFavorito = {
    nombre: "River Plate",
    anio: 1901,
    color: "Blanco y Rojo",
    estadio: "Monumental"
}

//Si quiero desestructurar varios a la vez podría hacer:
//no importa el orden cuando desestructuro. Si quiero renombrar una propiedad en este caso nombre y anio y llamarlo name y age se hace de la siguiente manera
const {anio: age,nombre: name, color, estadio} = equipoFavorito;   


//console.log(nombre);  //tiraría error ahora poque no existe fue reemplazada por name
console.log(name);
//console.log(anio) //tiraría error ahora poque no existe fue reemplazada por age
console.log(age);
console.log(color);
console.log(estadio);



//se puede hacer así pero no es lo más utilizado
const retornaPersona = (usuario) => {
    const {nombre, edad, clave} = usuario
    console.log(nombre, edad, clave)
}

retornaPersona(persona);


//más utilizado es así direcmtamente la desustrucutración directamente en el argumento 

const retornaPersona2 = ({nombre, edad, clave, rango= 10}) => { //Puedo asignar valores por defecto, a pesar que el objeto no tiene la propiedad.  Si el objeto tendría la propieadad rango el valor sería el que tiene el objeto original y en este caso no el 10. 
    console.log(nombre, edad, clave, rango)
}

retornaPersona2(persona);



const usoContexto = ({nombre, edad, clave, rango= 10}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const avenger = usoContexto(persona);


//una forma de desestructurar un objeto y que dentro tenga propiedades y querer agarrar esas propiedades que tiene el objeto que esta dentro del otro objeto.
//const {nombreClave, anios, latlng, latlng: {lat, lng}} = avenger;


//otra forma:
const {nombreClave, anios, latlng} = avenger;
const {lat,lng} = latlng;
console.log(nombreClave,anios);
console.log(latlng)
console.log(lat,lng)
 





