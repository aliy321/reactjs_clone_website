import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import SSRProvider from 'react-bootstrap/SSRProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SSRProvider>
        <App />
    </SSRProvider>
);
