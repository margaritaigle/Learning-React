import { useState } from 'react';
import PropTypes from 'prop-types';
import { hydrate } from 'react-dom';

export const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState( value ); // desestructuracion del retorno de la funcion useState
    
    const handleAdd = () => {
        // setCounter( counter + 1 ); ambas son validas
        setCounter( (c) => c + 1 ); // c es el valor nuevo que va tomando el counter 
    } 

    const handleSubst = () => {
        // setCounter( counter - 1 );
        setCounter( (c) => c - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubst }>
                -1
            </button>
            <button onClick={ handleReset }>
                Reset
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}


// onClick={ handleAdd } === onClick={ (event) => handleAdd(event) }