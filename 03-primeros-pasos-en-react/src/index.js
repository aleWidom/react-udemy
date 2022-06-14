import React from "react"; //para poder usar etiquetas hay que importar react

import ReactDom from "react-dom"; //usar cosas para el dom (web)
import CounterApp from "./CounterApp";
//import PrimeraApp from "./PrimeraApp";

import './index.css'


const divRoot =  document.querySelector('#root')



ReactDom.render(<CounterApp />, divRoot);   //render recibe dos parametros el primero que voy a renderizar, el segundo donde lo voy a renderizar.

//ReactDom.render(<PrimeraApp saludo="Hola soy Ale" />, divRoot); 