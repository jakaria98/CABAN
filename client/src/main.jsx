import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import AllUserInfoProvider from './contexts/AllUserInfo.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AllUserInfoProvider>
                <App />
            </AllUserInfoProvider>
            {/* <App /> */}
        </BrowserRouter>
    </React.StrictMode>
);
