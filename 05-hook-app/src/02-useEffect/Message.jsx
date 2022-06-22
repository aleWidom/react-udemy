import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
     /*  console.log('Message Mounted') */

     const onMoveMouse = (event) => {
        const {x,y} = event
        console.log(x,y)
     }

     window.addEventListener('mousemove', onMoveMouse)
    
      return () => {
      /*   console.log('Message unMounted') */
      window.removeEventListener('mousemove', onMoveMouse)
      }
    }, [])
    

  return (
    <h3>Usuario ya existe</h3>
  )
}
