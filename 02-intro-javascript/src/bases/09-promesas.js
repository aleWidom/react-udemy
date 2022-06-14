
import {getHeroeById, getHeroeByOwnwer}  from './bases/08-import-export'

console.log(getHeroeById);
console.log(getHeroeByOwnwer);

//las promesas por naturaleza son asíncronas, primero se va a ejecutar todo el codigo que es sincrono (secuencial)

//Las promesas se crean con un argumento que es un callback, el nombre de los parametros del callback de la promesa pueden recibir cualquier nombre aunque por convención se utiliza esos, resolve es otro callback que se va a ejecutar una vez que la promesa se cumplio, reject cuando la promesa falla.
/* const promesa = new Promise((resolve, reject)=> {
    setTimeout(() => {
        //Tarea
        //importar el
        const heroe = getHeroeById(2)
        resolve(heroe)
        //reject ("No se pudo encontrar el heroe") , iría este mensaje al parametro deol callback del catch
    }, 2000);
});


promesa.then((resultado)=> {
    console.log(resultado);
} )
promesa.catch((err) => {
    console.log(er)
}) */





const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            //Tarea
            //importar el
            const heroe = getHeroeById(id)
            if (heroe) {
                resolve(heroe)
            } else {
                reject ("No se pudo encontrar el heroe") //iría este mensaje al parametro deol callback del catch
            }
        }, 2000);
})
}

getHeroeByIdAsync(10)
.then((heroe) => {
    console.log(heroe);
})
.catch((err) => {
    console.log(err)
})