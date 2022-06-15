import React from 'react';
/* import PropTypes from 'prop-types' */



//Functional components

const FirstApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1 data-testid='test-title'>   {saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
}

/* FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
} */


export default FirstApp;