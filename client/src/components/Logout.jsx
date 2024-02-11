import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const currentDate = new Date();
    let localTime = currentDate.toISOString().split('.')[0] + 'Z';

    const params = {
        // Add query parameters as needed
        ids: 'CYYT',
        format: 'json',
        taf: 'true',
        hours: 0,
        bbox: '10,10,20,20',
        date: localTime,
    };
    let navigate = useNavigate();
    let logout = () => {
        Axios.get('http://aviationweather.gov/api/data/metar', { params })
            .then((res) => {
                console.log(res);
                // delete Axios.defaults.headers.common['Authorization'];
                // navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const curDate = new Date();

    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div>
                <button className="alert alert-danger" onClick={logout}>
                    Logout{curDate.toISOString()}
                </button>
            </div>
        </main>
    );
};

export default Logout;
