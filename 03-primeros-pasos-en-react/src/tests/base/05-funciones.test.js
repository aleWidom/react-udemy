import { getUser, getUsuarioActivo } from "../../base/05-funciones"
import "@testing-library/jest-dom";


describe("Pruebas-en-05-funciones", () => {
    test('getUserDebeRetornarUnObjeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest)

    });
    test('getUsuarioActivoDebeRetornarElNombreQueTieneDeArgumento', () => {
        const nombre = "Ale";

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre)

        expect(user).toEqual(userTest)
    })
})


