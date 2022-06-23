import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickButton = () => {
        inputRef.current.select()
    } 

  return (
   <>
   <h1>Focus Screen</h1>
   <input ref={inputRef} type="text" placeholder="Ingrese su mail" />
   <button onClick={onClickButton}>Set Focus</button>
   </>
  )
}
