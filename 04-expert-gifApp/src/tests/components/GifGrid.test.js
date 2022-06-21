import { render, screen } from "@testing-library/react"
import { GifGrid } from '../../components'
import {useFetchGifs} from '../../hooks/useFetchGifs'


jest.mock('../../hooks/useFetchGifs')

describe('pruebasEnGifGrid', () => {

    const category = 'One Punch';

    test('debeMostrarLoadingInicialmente', () => {

        useFetchGifs.mockReturnValue(
            {
               images: [], 
               loading: true 
            }
        )
        
        render(<GifGrid category={category} />)
        expect(screen.getByText('Loading'));
    })

    test('debeMostrarItemsCuandoSeCargaUseFetchGifs', () => {
  
        useFetchGifs.mockReturnValue(
            {
               images: [
                {
                    id: 1,
                    title: "Ale", 
                    url: 'https://'
                },
                {
                    id: 2,
                    title: "Lourdes",
                    url: 'https://'
                }
               ], 
               loading: false
            }
        )
        
        render(<GifGrid category={category} />)
        expect(screen.getAllByRole('img').length).toBe(2);

    })


})


