import {renderHook} from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'



describe('pruebasUseFetchGifsHook', () => {
    test('debeDeRegresarElEstadoInicial', () => {
        const {result} = renderHook(()=> useFetchGifs('One Punch'))
        console.log(result)
    })
})