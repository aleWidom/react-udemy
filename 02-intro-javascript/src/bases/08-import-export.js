//import {} from 'ruta', //donde se encuentra la info del archivo debo exportarlo con export

import heroes from '../data/heroes'
import {owners} from '../data/heroes'
console.log(heroes, owners);





//Tarea regresar de heroes el objeto con id2

export const getHeroeById = (id) => (
    heroes.find((e) => e.id === id)
    );

console.log(getHeroeById(2));



export const getHeroeByOwnwer = (owner) => (
    heroes.filter((e) => e.owner === owner)
    );


console.log(getHeroeByOwnwer("DC"));


