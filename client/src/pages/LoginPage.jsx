import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import setToken from '../utils/setToken';
import useAuth from '../utils/useAuth';

const LoginPage = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    // there is a bug in the code, the auth state is not working properly and app is re-rendering infinitely
    useEffect(() => {
        if (auth) {
            navigate('/dashboard');
        }
    }, [auth]);

    const [userLoginInfo, setUserLoginInfo] = useState({
        email: '',
        password: '',
        error: {},
    });

    const loginChange = (e) => {
        setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/api/user/login', userLoginInfo, { withCredentials: true })
            .then((res) => {
                setToken(res.data.token);
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
                setUserLoginInfo({ ...userLoginInfo, error: err.response.data });
            });
    };

    return <Login user={userLoginInfo} handleChange={loginChange} submitHandle={submitForm} />;
};

export default LoginPage;
