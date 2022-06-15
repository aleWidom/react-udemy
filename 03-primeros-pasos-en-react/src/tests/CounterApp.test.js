import { render, screen, fireEvent } from "@testing-library/react"
import CounterApp from "../CounterApp"



describe('Pruebas en <CounterApp />', () => {

   const valor = 100;
   const initialValue = 10

   test('snapshot', () => {
      const { container } = render(<CounterApp />)
      expect(container).toMatchSnapshot()
   });

   test('debeRegresar100', () => {

      render(<CounterApp value={valor} />)
      expect(screen.getByText(valor)).toBeTruthy()
   });

   test('debeDeIncrementar+1', () => {
      //renderiza el componente digamos 
      render(<CounterApp value={initialValue} />)

      //el fireEvent simula eventos
      fireEvent.click(screen.getByText('+1'));
      //el screen es como la captura de lo que renderiza por lo que entendi
      expect(screen.getByText('11')).toBeTruthy()
   });

   test('debeDeDecrementar-1', () => {
      render(<CounterApp value={initialValue} />)
      //screen debug me deja ver como está el componenente en ese momento
      screen.debug()
      fireEvent.click(screen.getByText('-1'));
      //screen debug me deja ver como está el componenente en ese momento
      screen.debug()
      expect(screen.getByText('9')).toBeTruthy()
   });

   test('debeFuncionarReset', () => {
      render(<CounterApp value={initialValue} />)
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
      fireEvent.click(screen.getByText('+1'));
/*       fireEvent.click(screen.getByText('Reset')); */

      //para mi una mejor forma para que no ocurra errores a futuro
      /* screen.getByRole busco a través de etiqueta */
      fireEvent.click(screen.getByRole('button', {name:'btn-reset'} ))
      expect(screen.getByRole('heading', {level:2}, {name:'counter'} )).toBeTruthy()
      expect(screen.getByRole('heading', {level:2}, {name:'counter'} ).innerHTML).toContain(initialValue)
   });

})
