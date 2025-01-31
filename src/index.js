import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';

import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render( <Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
); 
