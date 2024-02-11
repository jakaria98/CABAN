import React, { createContext, useEffect, useReducer, useState } from 'react';
import Axios from 'axios';

export const AllUserInfoContext = createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return action.payload;
        case 'ADD_USER':
            return [...state, action.payload];
        case 'GET_USER':
            return state.filter((user) => user._id === action.payload);
        case 'ACTIVATE_USER':
            return state.filter((user) => user.status === 'active');
        case 'DEACTIVATE_USER':
            return state.filter((user) => user.status === 'inactive');
        default:
            return state;
    }
};

const AllUserInfoProvider = (props) => {
    const [users, dispatch] = useReducer(reducer, []);
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
    const fetchUsers = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/api/user/all');
            // console.log(response.data.users);
            dispatch({ type: 'SET_USERS', payload: response.data.users });
        } catch (error) {
            console.log(error);
        }
    };

    const fetchDeptAndRole = async () => {
        try {
            const dept = await Axios.get('http://localhost:3000/api/department');
            setDepartments(dept.data.departments);
            const role = await Axios.get('http://localhost:3000/api/employeePost');
            setRoles(role.data.employeePosts);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    useEffect(() => {
        fetchDeptAndRole();
    }, []);
    return (
        <AllUserInfoContext.Provider value={{ userDispatch: dispatch }}>
            {props.children}
        </AllUserInfoContext.Provider>
    );
};

export default AllUserInfoProvider;
