import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router >
        <App />
    </Router>
)