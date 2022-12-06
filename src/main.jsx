import React from 'react';
import './styles.css';
import ReactDOM, { createRoot } from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import {CounterApp} from './CounterApp';

ReactDOM.createRoot(document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={0}  />
    </React.StrictMode>
);