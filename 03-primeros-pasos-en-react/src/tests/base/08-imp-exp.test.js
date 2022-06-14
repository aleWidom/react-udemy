import {getHeroeById, getHeroesByOwner} from "../../base/08-imp-exp"
import heroes from "../../data/heroes";
import "@testing-library/jest-dom"


describe ("Pruebas en funciones de heroes", () => {
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

    
    })

    test('debe retornar un nuevo arreglo que contenga los heroes de Dc, utilizando toEqual ', () => {
        
        const owner = "DC";

        const heroesByOwner = getHeroesByOwner(owner);


        const heroesDc = heroes.filter((e)=> (
            e.owner === owner
        ))

        expect(heroesByOwner).toEqual(heroesDc);

    })

    test('Debo utilizar un toBe, y debe coincidir la longitud del array', () => {
        
        const owner = "Marvel";

        const heroesByOwner = getHeroesByOwner(owner);

        const heroesDc = heroes.filter((e)=> (
            e.owner === owner
        ))

        expect(heroesByOwner.length).toBe(heroesDc.length)

    })
    
    
    
})