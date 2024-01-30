import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import UserInfoProvider from './contexts/userInfoContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <UserInfoProvider>
                <App />
            </UserInfoProvider> */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
