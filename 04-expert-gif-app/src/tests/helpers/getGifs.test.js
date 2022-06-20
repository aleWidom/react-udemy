import { getGifs } from '../../helpers/getGifs'

describe('pruebasEnGetGifs', () => {
    test('debeRetornarArraysGifs', async () => {
        const gifs = await getGifs('One Punch');
        //estoy diciendo que sea mayor a 0 
        expect(gifs.length).toBeGreaterThan(0)
        //no basta solo con que sea mayor a cero, aca le estoy diciendo que sea igual a ese objeto con esas propuiedades pero no me importa el valor de cada propiedad en este caso me importa solamente que sea cualquier string
        expect(gifs[0]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            }
        )
    })
})