import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'



describe('pruebasUseFetchGifsHook', () => {
    test('debeDeRegresarElEstadoInicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'))
        const { images, loading } = result.content
        expect(images).toBe(0)
        expect(loading).toBeTruthy()
    })

    test('debeDeRetornarUnArregloDeImagenesYElLoadingEnFalse', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'))

        //espera en este caso a que el resultado.current.images.length sea mayor a cero
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            { timeout: 1000 }
        )

        const { images, loading } = result.content
        expect(images.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();

    })
})