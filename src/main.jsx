import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import  { store } from './store/store.js';

// اضافه کردن کل آن به کل پروژه (تمامی فرزندانی که زیر مجموعه این کامپوننت هستند)
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
