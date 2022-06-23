import { render, screen } from "@testing-library/react"
import {GifExpertApp} from "../GifExpertApp"

describe('PruebasEnGifExpertApp', () => { 

    const categoryIncial = 'Los Simpsons'

    test('debeTirarErrorSiNoSePasaComoPropTypesUnArray', () => { 
        render(<GifExpertApp categoryInicial={[categoryIncial]}/>)
     })


    


 })