import React, {useState} from 'react'
/* import PropTypes from 'prop-types' */

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value); 

    const handleAdd = () => {
       setCounter(counter+1);
       //setCounter ((c) => c+1) se puede hacer así también.
    }

    const handleReset = () => (
        setCounter(value)
    )


    const handleSubstract = () => (
        setCounter(counter-1)
    )


    return (
        <>
        <h1>CounterApp</h1>
        <h2 aria-label='counter'>{counter}</h2>  
        <button onClick={handleAdd}>+1</button>
        <button aria-label='btn-reset' onClick= {handleReset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>
        </>
    )
}

/* CounterApp.propTypes = {
    value: PropTypes.number
}



 */
export default CounterApp
