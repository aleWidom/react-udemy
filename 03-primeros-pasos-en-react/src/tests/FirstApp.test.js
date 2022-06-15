import { render } from "@testing-library/react"
import FirstApp from "../FirstApp"





describe('Pruebas en <FirstApp />', () => {
   /*  test('debeHacerMatchConElSnapshot', () => {
        const saludo = 'Hola Ale'
       const {container} = render(<FirstApp saludo={saludo}/>)
        expect(container).toMatchSnapshot()
    }); */
    test('debeMostrarTítuloEnH1(noEsRecomendableDebeSerMasFlexible)', () => {
        const saludo = 'Hola Ale'
        const {getByText, getByTestId} = render(<FirstApp saludo={saludo}/>)
        expect(getByText(saludo)).toBeTruthy()
        expect(getByTestId('test-title')).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toContain(saludo)


        //esto consulta si se esta renderizando saludo ("si lo borro en FirstApp va a saltar el error")
   
        //toContain hace que no importa si hay espacios por ej dentro de la etiqueta lo importante es que este 
    /*     const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain(saludo) */
    });
    test('debeMostrarSubtitulosEnviadosPorProps', () => { 
        const saludo = 'Hola Ale'
        const subtitle = "Soy un subtitulo"
        const {queryAllByText, getByText} = render(<FirstApp saludo={saludo} subtitulo={subtitle}/>)
        expect(queryAllByText(subtitle).length).toBe(1)
        expect(getByText(subtitle)).toBeTruthy()
     })
})
