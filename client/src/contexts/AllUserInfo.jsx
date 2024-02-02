import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const AllUserInfoContext = createContext();

const AllUserInfoProvider = (props) => {
    const [cookie, setCookie] = useState({});
    const myCookieValue = Cookies.get('CABAN');
    console.log(myCookieValue);

    useEffect(() => {
        const myCookieValue = Cookies.get('CABAN');
        console.log(myCookieValue);
        setCookie(myCookieValue);
    }, []);

    return <AllUserInfoContext.Provider value={{ cookie }}>{props.children}</AllUserInfoContext.Provider>;
};

export default UserInfoProvider;
