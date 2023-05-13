import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios"
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

axios.defaults.baseURL = "http://localhost:8004";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

