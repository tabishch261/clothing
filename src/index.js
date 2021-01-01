import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import store from  './redux/store'
import { Provider } from 'react-redux'; // this is redux component that is used to get access to the store object and reducers
// SO provider is the component that is the parent of everything inside our application



ReactDOM.render( // this BrowserRouter gives our application all the routing functionalities

    // pull values-off of the stores and into the component
    <Provider store = {store}>
    <BrowserRouter>  
    <App/> 
    </BrowserRouter>, document.getElementById('root')
    </Provider>,
    document.getElementById('root')
);