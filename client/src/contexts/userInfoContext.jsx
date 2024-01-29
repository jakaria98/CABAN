import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const UserInfoContext = createContext();

const UserInfoProvider = (props) => {
    const [userLoginInfo, setUserLoginInfo] = useState({
        email: '',
        password: '',
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

                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    console.log(userLoginInfo);

    return (
        <UserInfoContext.Provider value={{ userLoginInfo, loginChange, submitForm }}>
            {props.children}
        </UserInfoContext.Provider>
    );
};

export default UserInfoProvider;
