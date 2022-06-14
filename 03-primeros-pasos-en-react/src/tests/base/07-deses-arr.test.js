import retornaArreglo from "../../base/07-deses-arr"
import "@testing-library/jest-dom";


describe ("realizando pruebas en deses-arr", ()=> {
    test('Debe retornar un arreglo', () => {
        
        const arreglo = retornaArreglo();

        expect(arreglo).toEqual(['ABC', 123]);

        const [letras, numeros] = arreglo;

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

        expect(typeof letras).toBe("string");
        expect(typeof numeros).toBe("number");
        
    })
})

