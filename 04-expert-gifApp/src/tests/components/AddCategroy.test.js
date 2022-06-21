import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"


describe('pruebasEnAddCategory', () => {

    test('elValueInicialDebeSerVacio', async () => {
        render(<AddCategory onNewCategory={() => { }} />);
        //textbox es el input en la libreria testing de react 
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('')
    })

    test('debeDeCambiarElValorDeLaCajaDeTexto', async () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } })
        expect(input.value).toBe('Saitama')
    })

    test('debeCambiarElValueAVacioSiSeRealizoSubmitConElInputValueMayorA1', async () => {
        const inputValue = 'Saitama';

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        //debemos pasar en el formulario un aria-label sino tira error
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        expect(input.value).toBe('')
    })

    test('noDeCambiarElValueAVacioSiSeRealizoSubmitConElInputValueMenorOIgualA1', async () => {
        const inputValue = 'S';

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        expect(input.value).toBe('S')
    })

    test('debeLlamarseLaFuncionOnNewCategorySiElInputValueEsMayorA1', async () => {
        const inputValue = 'Saitama';

        //es una funciòn mock que nos oferce jest
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        //este metodo nos permite saber si fue llamada la funciòn
        expect(onNewCategory).toHaveBeenCalled()
        //estoy esperando que solo se ejecute una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1)

        //esto para decirle con que valor se espera que sea llamada
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('noDebeLlamarseLaFuncionOnNewCategorySiElInputValueEsMayorA1', async () => {
        const inputValue = 'S';

        //es una funciòn mock que nos oferce jest
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        //estoy esperando que solo se ejecute cero veces
        expect(onNewCategory).toHaveBeenCalledTimes(0)


    })


})