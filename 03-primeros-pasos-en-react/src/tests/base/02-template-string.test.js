import { getSaludo } from "../../base/02-template-string"
import "@testing-library/jest-dom";

describe("pruebas-en-template-string", () => {
    test('getSaludo-debe-devolver-hola-nombre', () => {

        const nombre = "Alejandro";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola " + nombre);
    })

    //getSaludo debe de retornar Hola Mario si no hay argumento en nombre

    test('debe-retornar-hola-mario-si-no-hay-argumento', () => {

        const nombre = "Alejandro";
        const saludo = getSaludo();
        expect(saludo).toBe("Hola Mario")

    })


})