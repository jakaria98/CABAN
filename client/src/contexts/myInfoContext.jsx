// myInfoContext.jsx
import { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

const MyInfoContext = createContext();

const MyInfoProvider = (props) => {
    const [myInfo, setMyInfo] = useState({});
    const [auth, setAuth] = useState(null); // Set initial value to null

    const fetchMyInfo = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/api/user/me', {
                withCredentials: true,
            });
            if (response.data && Object.keys(response.data).length > 0) {
                setMyInfo(response.data.user);
                setAuth(true);
            } else {
                setAuth(false); // Set to false if not authenticated
            }
        } catch (error) {
            console.log(error);
            setAuth(false); // Set to false on error
        }
    };

    useEffect(() => {
        fetchMyInfo();
    }, []);

    // Render children only when auth status is determined
    return auth !== null ? (
        <MyInfoContext.Provider value={{ myInfo, auth }}>{props.children}</MyInfoContext.Provider>
    ) : null; // Render null while waiting for auth status
};

export { MyInfoContext, MyInfoProvider };
