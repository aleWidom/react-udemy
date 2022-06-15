import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp"
import heroes from "../../data/heroes";
import "@testing-library/jest-dom"


describe ("PruebasEnFuncionesDeHeroes", () => {
    test('Debe de retornar un heroe por id', () => {
        
        const id = 1;

        const heroe = getHeroeById(id);

        const heroesData = heroes.find((e)=> (
            e.id === id
        ));

        expect(heroe).toEqual(heroesData);

    })

    test('Debe de retornar undefined por id inexistente', () => {
        
        const id = 10;

        const heroe = getHeroeById(id);

        expect(undefined).toBe(heroe);    
    }),
    test('arreglosHeroesDcAndLenght', () => { 

        const heroesDc = getHeroesByOwner('DC')

        expect(heroesDc).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])
        expect(heroesDc.length).toBe(3)
    }),
    test('arreglosHeroes MarvelAndLenght', () => { 

        const heroesDc = getHeroesByOwner('Marvel');

        expect(heroesDc).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ])

        expect(heroesDc.length).toBe(2)  

     })    
})