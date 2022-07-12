import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp.jsx';
import { HelloWorldApp } from './HelloWorldApp.jsx';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp title="Hola, soy david" subTitle={ 123 } />
    </React.StrictMode>
);