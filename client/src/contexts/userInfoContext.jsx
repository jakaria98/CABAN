import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const UserInfoContext = createContext();

const UserInfoProvider = (props) => {
    const [cookie, setCookie] = useState({});
    const myCookieValue = Cookies.get('CABAN');
    console.log(myCookieValue);

    useEffect(() => {
        const myCookieValue = Cookies.get('CABAN');
        console.log(myCookieValue);
        setCookie(myCookieValue);
    }, []);

    return <UserInfoContext.Provider value={{ cookie }}>{props.children}</UserInfoContext.Provider>;
};

export default UserInfoProvider;
