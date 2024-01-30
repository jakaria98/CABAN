import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import setToken from '../utils/setToken';

const LoginPage = () => {
    const [userLoginInfo, setUserLoginInfo] = useState({
        email: '',
        password: '',
        error: {},
    });
    const navigate = useNavigate();
    const loginChange = (e) => {
        setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
    };
    const submitForm = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/api/user/login', userLoginInfo)
            .then((res) => {
                console.log(res);
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
