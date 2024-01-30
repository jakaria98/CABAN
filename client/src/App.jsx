import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default App;
