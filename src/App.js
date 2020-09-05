import React from 'react';
import { Router } from 'react-router-dom';

import { Routes } from './util'
import history from './services/history';

import GlobalStyle from './styles/globalstyle'

function App() {
    return (
        <Router history={history}>
            <Routes />
            <GlobalStyle />
        </Router>
    );
}

export default App;
