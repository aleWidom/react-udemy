import { render, screen } from "@testing-library/react"
import FirstApp from "../FirstApp"





describe('Pruebas en <FirstApp />', () => {
    const saludo = 'Hola Ale'
    const subtitle = "Soy un subtitulo"

    test('debeMostrarMensajeHolaAle)', () => {
        render(<FirstApp saludo={saludo} />)
        expect(screen.getByText(saludo)).toBeTruthy()

    });
    test('debeMostrarSubtitulosEnviadosPorProps', () => {
        render(<FirstApp saludo={saludo} subtitulo={subtitle}/>)
        expect(screen.queryAllByText(subtitle).length).toBe(1)
    })
})
