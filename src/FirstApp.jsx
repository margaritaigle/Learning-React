import PropTypes from 'prop-types';
// const newMessage = 'Margarita'; 
// const newMessage2 = 2; 
// const newMessage3 = [1, 2, 3, 'hola', 5];

// const newMessage4 = {
//     name: 'Margarita',
//     age: 23,
// }

// const saludar = (nombre) => {
//     return 'Hola ' + nombre; 
// }

// si debemos imprimir un objeto colocamos JSON.stringify(element)
// SI LA FUNCION ES ASINCRONA, AL OBTENER UN RESULTADO QUE ES UN OBJETO, VA A DAR ERROR
export const FirstApp = ( { title, subtitle, name } ) => {

    //console.log(props);

    return (
        <>
            {/* <h1>{ newMessage }</h1> */}
            {/* <h1>{ saludar('Margarita') }</h1> */}
            {/* <h1>{newMessage2}</h1> Imprime 2 */}
            {/* <h1>{newMessage3}</h1> Imprime '123hola5' */}
            {/* <h4>{JSON.stringify(newMessage4)}</h4> imprime: {"name":"Margarita","age":23} */}
            {/* <h4>{newMessage4.name}</h4> imprime: 'Margarita'*/}
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    );
}

// PropTypes deben ser importadas y dado el caso, instaladas. Con ellas puedo asignarle un tipo
// a la propiedad y si debe ser obligatoria (en vite)
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

// defaultProps, si no se ingresa nada en la prop, son los valores que se toma por defecto
// seria lo mismo que asignarles un valor en la desestructuracion de la funcion (en los parametros)
FirstApp.defaultProps = {
    name: 'Margarita Iglesias',
    subtitle: 'No hay subtitulo', // al asignarle un valor de otro tipo que no es el asignado, no aparecera error en consola
    title: 'No hay titulo',
}