import { useState, useEffect } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({username: 'Ale', email: 'alejandro@google.com'})

    const onInputChange = (event) => {

        const {target} = event
        const {name, value} = target

        if(name === 'username') {
            setFormState(
                {...formState,
                username: value
                }
            )
        } 
        else if(name === 'mail') {
            setFormState(
                {...formState,
                email: value
                }
            )
        }
       /* averigual sobre propiedades computadas lo resuelve así o ver en dudas de udemy las respuestas*/
    }

    //se recomienda tener tantos efectos como tareas especificas a desarrollar

    useEffect(() => {
       /*  console.log('effect with dependence empty') */
    }, [])

    //aunque tenga una dependecia que se ejecute cuando cambie el formState se va a renderizar también la primera vez
    useEffect(() => {
       /*  console.log('effect form state changed') */
    }, [formState])

    useEffect(() => {
/*         console.log('email changed') */
    }, [formState.email])
  
    
    

  return (
   <>
    <h1>SimpleForm</h1>
    <hr/>
    <input type={'text'} placeholder={'Username'} name={'username'} value={formState.username} onChange={onInputChange}/>
    <hr/>
    <input type={'email'} placeholder={'Email'} name={'mail'} value={formState.email}  onChange={onInputChange}/>
    {formState.username === 'Alej' && <Message/>}
    </>
  )
}

