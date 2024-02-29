import { useState, useEffect } from 'react';
import Axios from 'axios';

const useAuth = () => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});
    useEffect(() => {
        const checkAuth = async () => {
            try {
                let response = await Axios.get('http://localhost:3000/api/user/me', {
                    withCredentials: true,
                });

                if (response.data && Object.keys(response.data).length > 0) {
                    setAuth(true);
                    setUser(response.data.user);
                }
            } catch (error) {
                console.log(error);
            }
        };
        checkAuth();
    }, []);

    return { auth, user };
};

export default useAuth;
