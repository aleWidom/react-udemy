import React, {useState} from 'react'
/* import PropTypes from 'prop-types'; */

//COMPONENTE DEBE TENER UNA UNICA TAREA ESPECIFICA Y SE OCUPE BIEN DE ELLA
const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState("")
    
    
    const changeValue = (e) => (
        setInputValue(e.target.value)
    )


    const submit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            onNewCategory(inputValue.trim())
            setInputValue("")
        }
    };



    return (
        <form onSubmit={submit}>
          <input type="text" value={inputValue} onChange={changeValue}/>
        </form>
   )
}


export default AddCategory;