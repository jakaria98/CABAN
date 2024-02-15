import { createContext, useState, useEffect, useReducer } from 'react';
import Axios from 'axios';

export const DepartmentContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DEPARTMENT':
            return state.map((dept) => {
                if (dept._id === action.payload._id) {
                    return action.payload;
                }
                return dept;
            });
        case 'ADD_DEPARTMENT':
            return [...state, action.payload];
        case 'GET_DEPARTMENT':
            return state.filter((dept) => dept._id === action.payload);
        case 'SET_DEPARTMENTS':
            return action.payload;
        default:
            return state;
    }
};
const DepartmentProvider = (props) => {
    const [departments, dispatch] = useReducer(reducer, []);

    const fetchDept = async () => {
        try {
            const response = await Axios.get('http://localhost:3000/api/department');
            //console.log(response.data);
            dispatch({ type: 'SET_DEPARTMENTS', payload: response.data });
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchDept();
    }, []);

    return (
        <DepartmentContext.Provider value={{ departments, departmentDispatch: dispatch }}>
            {props.children}
        </DepartmentContext.Provider>
    );
};

export default DepartmentProvider;
