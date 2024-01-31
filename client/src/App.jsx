import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Sidebar from './components/Sidebar.jsx';
import WeatherPage from './pages/WeatherPage.jsx';

function App() {
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route
                    path="*"
                    element={<h1>Not Found The Page. Please try to reach a valid page.</h1>}
                />
            </Routes>
        </div>
    );
}

export default App;
