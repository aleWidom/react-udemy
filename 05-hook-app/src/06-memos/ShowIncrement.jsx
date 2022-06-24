import { memo } from "react"


export const ShowIncrement = memo(({ increment }) => {

    console.log('Me volvi a generar')


    const onClickButton = () => {
        increment()
    }

    return (
        <button onClick={onClickButton}>Incrementar</button>
    )
})
