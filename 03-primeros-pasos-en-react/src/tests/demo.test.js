//sirve para agrupar los test para que tengan un título (contenedor en general)
describe("pruebas en el archivo demo.test", () => {

    //test es una función que por primer parametro recibe un string, y como segundo una función.
    test('debe de ser iguales los strings', () => {

        //1. Inicialización
        const mensaje = "Hola Mundo";

        //2 Estímulo
        const mensaje2 = 'Hola Mundo';

        //Observar el comportamiento
        //valor inicial  //esperamos que sea igual a este valor
        expect(mensaje).toBe(mensaje2); //===

    })

})
