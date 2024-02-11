import { useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import AllUserInfoProvider from './contexts/AllUserInfo.jsx';

import './App.css';
import Login from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Sidebar from './components/Sidebar.jsx';
import WeatherPage from './pages/WeatherPage.jsx';
import Cargo from './pages/Cargo.jsx';
import Charter from './pages/Charter.jsx';
import Reporting from './pages/Reporting.jsx';
import Vale from './pages/Vale.jsx';
import Pax from './pages/Pax.jsx';
import Sked from './pages/Sked.jsx';

function App() {
    useEffect(() => {
        //Read a cookie
        console.log(Cookies.get('CABAN'));
    }, []);
    // const navigate = useNavigate();
    // const tr = true;
    // useEffect(() => {
    //     if (tr) {
    //         navigate('/dashboard');
    //     } else {
    //         navigate('/');
    //     }
    // });

    return (
        <div>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <AllUserInfoProvider>
                            <Dashboard />
                        </AllUserInfoProvider>
                    }
                />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/cargo" element={<Cargo />} />
                <Route path="/charter" element={<Charter />} />
                <Route path="/reporting" element={<Reporting />} />
                <Route path="/vale" element={<Vale />} />
                <Route path="/pax" element={<Pax />} />
                <Route path="/sked" element={<Sked />} />
                <Route
                    path="*"
                    element={<h1>Not Found The Page. Please try to reach a valid page.</h1>}
                />
            </Routes>
        </div>
    );
}

export default App;
