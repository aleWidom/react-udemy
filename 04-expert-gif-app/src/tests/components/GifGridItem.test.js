
import { render, screen } from "@testing-library/react"
import { GifGridItem } from '../../components';


describe('GifGridItem', () => {

  const title = 'title';
  const url = 'http://'

  test('Snapshot', () => {
    const { container } = render(<GifGridItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  });

  test('DebeMostrarLaImagenConElUrlYAltIndicado', () => {
    render(<GifGridItem title={title} url={url} />)
  /* expect(screen.getByRole('img').alt).toBe(title)
     expect(screen.getByRole('img').src).toBe(url), otra forma más elegante a continuación */
    const {src, alt} = screen.getByRole('img')
    expect(alt).toBe(title)
    expect(src).toBe(url)
  });
})