import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        Axios.post('http://localhost:3000/api/user/logout')
            .then((res) => {
                console.log('logout');
                delete Axios.defaults.headers.common['Authorization'];
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div>
                <button className="alert alert-danger" onClick={logout}>
                    Logout
                </button>
            </div>
        </main>
    );
};

export default Logout;
