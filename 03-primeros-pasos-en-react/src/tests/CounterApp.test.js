import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import CounterApp from "../CounterApp";
import { expect } from '@jest/globals';


describe('Pruebas en <CounterApp />', () => {

  //hago esto para no perder el intelligent de vscode, podría hacer tranquilamente let wrapper; pero así pierdo el intelligent de vscode
    let wrapper = shallow(<CounterApp />);

    beforeEach( () =>
        
         wrapper = shallow(<CounterApp />)

        )

    
    test('Debe de mostrar <CounterApp /> correctamente', () => {
    //shallow similar al render de arriba pero me va a dar más opciones


       expect(wrapper).toMatchSnapshot();   
    })

    test('Debe de mostrar <CounterApp /> con valor 100', () => {
        //shallow similar al render de arriba pero me va a dar más opciones
    
            wrapper = shallow(<CounterApp value={100}/>);

            const valorCounterApp = wrapper.find('h2').text().trim()

            expect(valorCounterApp).toBe("100");
           
        })


    test('Debe incrementar con el botón de +1 ', () => {
        
        wrapper.find('button').at(0).simulate("click"); //at indica posición  //simulate (simula el click)
        
        const valorCounterApp = wrapper.find('h2').text().trim();

        expect(valorCounterApp).toBe("1")

    })


    test('Debe decrementar con el botón de -1 ', () => {

        wrapper.find('button').at(2).simulate("click"); //at indica posición  //simulate (simula el click)
        
        const valorCounterApp = wrapper.find('h2').text().trim();

        expect(valorCounterApp).toBe("-1")

        

    })
        

    test('Debe colocar el valor por defecto con el btn reset', () => {
        
        wrapper = shallow(<CounterApp value={105}/>);

        wrapper.find('button').at(0).simulate("click"); //at indica posición  //simulate (simula el click)
        
        const valorIncrementoEn1 = wrapper.find('h2').text().trim();

        console.log(valorIncrementoEn1);

        wrapper.find('button').at(1).simulate("click");

        const valorReset = wrapper.find('h2').text().trim()
        
        expect(valorReset).toBe("105")
       
    })
    

        
    

})
