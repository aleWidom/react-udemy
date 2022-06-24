import { memo } from "react";

export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    const onButton = () => {
        incrementar( numero ) 
    }

    return (
        <button className="btn btn-primary mr-3" onClick={onButton}>
            { numero }
        </button>
    )
}
)


  