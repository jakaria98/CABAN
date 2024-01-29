import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        Axios.post('http://localhost:3000/api/user/logout')
            .then((res) => {
                delete Axios.defaults.headers.common['Authorization'];
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <button className="alert alert-danger" onClick={logout}>
                Logout
            </button>
        </div>
    );
};

export default Logout;
