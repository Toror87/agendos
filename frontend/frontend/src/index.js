import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
DOM (Document Object Model) es una API que transforma
los elementos HTML o XML en objetos de un lenguaje de programación.
El lenguaje más comunmente utilizado para DOM es Javascript.
Esto permite al progamador manipular los elementos HTML o XML
programáticamente, con código lógico, y modificar el aspecto de la web.
 */

/* ReactDOM.render() renderiza un elemento React en el DOM
dentro del contenedor asignado, y retorna una referencia al componente
En React, un elemento es un objeto básico que se presenta como
una instancia de un componente con sus propiedades, con formato similar al de JSON:
Ejemplo de elemento de tipo string:

{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

representa a el siguiente HTML:

<button class='button button-blue'>
  <b>
    OK!
  </b>
</button>

Pero un elemento puede también estar describiendo
un componente, que puede ser una class o una funcion:
Ejemplo de componente:

const DangerButton = ({ children }) => ({
  type: Button,
  props: {
    color: 'red',
    children: children
  }
});
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
