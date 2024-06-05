import React from 'react';
// Cambiamos el Dom e importamos para mejorar la inicializacion de la aplicacion import ReactDOM from 'react-dom/client'; por:
import { createRoot } from 'react-dom/client';

// Nos ayuda a que el store funcione
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

