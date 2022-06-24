
import { useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    //cuando utilice el setCategories, y esto cambie react renderiza nuevamente el componente y va a mostrar los cambios.
    const [categories, setCategories] = useState(['Los Simpsons'])

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

