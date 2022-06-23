import { useState} from "react"
export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = (event) => {

        const { target } = event
        const { name, value } = target

        if (name === 'username') {
            setFormState(
                {
                    ...formState,
                    username: value
                }
            )
        }
        else if (name === 'mail') {
            setFormState(
                {
                    ...formState,
                    email: value
                }
            )
        }
        else if (name === 'password') {
            setFormState(
                {
                    ...formState,
                    password: value
                }
            )
        }
        /* averigual sobre propiedades computadas lo resuelve así o ver en dudas de udemy las respuestas*/
    }


    const onResetForm = () => {
        setFormState(initialForm)
    }


    return {
        formState,
        onInputChange,
        onResetForm
    }
}
