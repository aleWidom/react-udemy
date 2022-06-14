/*const saludar = function (nombre) {
    return `Hola, ${nombre}`
}*/


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = nombre => `Hola, ${nombre}`;

const saludar4 = () => `Hola, Mundo`;


console.log(saludar2("Ale"));
console.log(saludar3("Ale"));
console.log(saludar4());



const getUser = () => {
    return {
        uid: "ABC123",
        usaername: "El_papi1502"
    }
}

const user = getUser()
console.log(user)


//Tarea
//1 Transformen a una función de flecha
//2 Tiene que retornar un objeto implícito
//3 Pruebas



/*function  getUsuarioActivo (nombre) {
    return {
        uid: "ABC567", 
        usaername: nombre
    }
};*/



const getUsuarioActivo = nombre => (
    {
        uid: "ABC567", 
        usaername: nombre
    };
    );




const userActivo = getUsuarioActivo("Alejandro");
console.log(userActivo);