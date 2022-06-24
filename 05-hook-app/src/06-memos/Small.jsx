import { memo } from 'react'

//esto de memo se debe usar cuando el componente es lo suficientemente grande o pesado, no obstante lo ideal es tener componentes chicos como ya vimos por lo que su uso debe ser solamente para casos especiales. La funciòn memo tiene como argumento al componente y le dice que se ejecute solamente cuando a este le cambien las properties.

export const Small = memo(({ value }) => {

    console.log('Me volvi a generar')

    return (
        <small>{value}</small>
    )
})
