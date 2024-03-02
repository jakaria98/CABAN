// useAuth.jsx
import { useState, useEffect } from 'react';
import Axios from 'axios';

const useAuth = () => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchAuth = () => {
            Axios.get('http://localhost:3000/api/user/me', {
                withCredentials: true,
            })
                .then((response) => {
                    if (response.data && Object.keys(response.data).length > 0) {
                        setUser(response.data.user);
                        setAuth(true);
                    } else {
                        setAuth(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setAuth(false);
                });
        };

        fetchAuth();
    }, []);

    return { auth, user };
};

export default useAuth;
