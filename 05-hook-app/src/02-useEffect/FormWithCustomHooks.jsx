import { useForm } from "../hooks/useForm"
/* import { Message } from "./Message" */

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({ username: '', email: '', password: '' })

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />
            <input type={'text'} placeholder={'Username'} name={'username'} value={formState.username} onChange={onInputChange} />
            <hr />
            <input type={'email'} placeholder={'Email'} name={'mail'} value={formState.email} onChange={onInputChange} />
            <hr />
            <input type={'password'} placeholder={'Password'} name={'password'} value={formState.password} onChange={onInputChange} />
            <hr />
            <button onClick={onResetForm}>Borrar</button>
            {/*     {formState.username === 'Alej' && <Message/>} */}
        </>
    )
}

