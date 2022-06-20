import { render, screen } from "@testing-library/react"
import { GifGrid } from '../../components'


describe('pruebasEnGifGrid', () => {

    const category = 'One Punch';

    test('debeMostrarLoadingInicialmente', () => {
        render(<GifGrid category={category} />)
        expect(screen.getByText('Loading'));
        expect(screen.getByText(category));
    })

    test('debeMostrarItemsCuandoSeCargaUseFetchGifs', () => {
        render(<GifGrid category={category} />)
        expect(screen.getByText('Loading'));
        expect(screen.getByText(category));
    })


})


