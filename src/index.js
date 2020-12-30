import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render( // this BrowserRouter gives our application all the routing functionalities
    <BrowserRouter>  
    <App/> 
    </BrowserRouter>, document.getElementById('root'));

