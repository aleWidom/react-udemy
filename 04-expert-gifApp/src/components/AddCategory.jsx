import { useState } from 'react'
import PropTypes from 'prop-types';

//COMPONENTE DEBE TENER UNA UNICA TAREA ESPECIFICA Y SE OCUPE BIEN DE ELLA
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("")


    const changeValue = (e) => (
        setInputValue(e.target.value)
    )


    const submit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())
        setInputValue("")
    };

    return (
        <form onSubmit={submit} aria-label='form'>
            <input type="text" value={inputValue} onChange={changeValue} placeholder={'Buscar Gifs'} />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
};
