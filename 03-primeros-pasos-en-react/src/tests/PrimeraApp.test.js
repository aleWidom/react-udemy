import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
//import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";



describe('Pruebas en <PrimeraApp />', () => {
    
    /*test('debe mostrar el mensaje Hola soy Ale"', () => {
        
        const saludo = "Hola soy Ale";

        const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();


    })*/

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
    //shallow similar al render de arriba pero me va a dar más opciones

       const saludo = "Hola soy Ale";

       const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

                        
        expect(wrapper).toMatchSnapshot();
    })


    test('Debe de mostrarel subtitulo enviado por props', () => {
     
        const saludo = "Hola soy Ale";
        const subtitulo = "Soy un subtitulo"

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo}/>);

        //find funciona igual que el document.querySelector
        const textoParrafo = wrapper.find('p').text();
        
        //esperaria que texto párrafo sea igual a subtitulo
        expect( textoParrafo ).toBe(subtitulo);
        })

})
