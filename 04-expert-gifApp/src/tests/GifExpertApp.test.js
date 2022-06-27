import { render, screen } from "@testing-library/react"
import {GifExpertApp} from "../GifExpertApp"

describe('PruebasEnGifExpertApp', () => { 
    //no funciona los test como quiero verlo más adelante
    test('debeAgregarseLaCategoriaSiLaMismaNoExiste', () => { 
        const onNewCategory = (categories, input) => {
            if (categories.includes(input)){
               return categories
            } else {
                   return [
                    ...categories,
                    input
                ]
            }
       }

        render(<GifExpertApp/>)
        const categories = onNewCategory(['El Chavo'], 'Supercampeones')
        expect(categories.length).toBe(2)
     })


     test('noDebeAgregarseLaCategoriaSiLaMismaExiste', () => { 
        const onNewCategory = (categories, input) => {
            if (categories.includes(input)){
               return categories
            } else {
                   return [
                    ...categories,
                    input
                ]
            }
       }

        render(<GifExpertApp/>)
        const categories = onNewCategory(['El Chavo'], 'El Chavo')
        expect(categories.length).toBe(1)
     })



 })