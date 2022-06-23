
import { useState} from "react";
import PropTypes from 'prop-types';
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = ({categoryInicial}) => {

    //cuando utilice el setCategories, y esto cambie react renderiza nuevamente el componente y va a mostrar los cambios.

    const [categories, setCategories] = useState([categoryInicial])

    const onNewCategory = (value) => {
         if (categories.includes(value)){
            return
         } else {
            setCategories([...categories, value]) 
         }
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory onNewCategory={onNewCategory}/>
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </>
    );
}

GifExpertApp.propTypes = {
    categoryInicial: PropTypes.array.isRequired,
  };
  