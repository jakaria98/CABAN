//external imports
import Axios from 'axios';
import { useEffect, useState, useContext } from 'react';

//internal imports
import Form from '../components/forms/Form';
import Header from '../components/forms/Header';
import Input from '../components/forms/Input';
import DropdownInput from '../components/forms/DropdownInput';
import PageTitle from '../components/PageTitle';
import Credential from '../components/forms/Credential';
import { AllUserInfoContext } from '../contexts/AllUserInfo';

const AddUser = () => {
    const { dispatch} = useContext(AllUserInfoContext);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        employeeId: '',
        department: '',
        employeePost: '',
        role: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const submitButton = async (e) => {
        e.preventDefault();
        try {
            const newUser = await Axios.post('http://localhost:3000/api/user/register', user);
            console.log(newUser.data.userObject);
           dispatch({ type: 'ADD_USER', payload: newUser.data.userObject });
        } catch (err) {
            setError(err.response.data);
        }
    };
    return (
        <main className="ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Registration" />
            <br />
            <br />
            <Form buttonText="Submit" submitHandler={submitButton}>
                <Header text="Add User" />
                <Input
                    name="firstName"
                    label="First Name"
                    value={user.firstName}
                    changeHandler={handleChange}
                    error={error ? error?.errors?.firstName : ''}
                    type="text"
                    placeholder="Enter Your First Name"
                />
                <Input
                    name="lastName"
                    label="Last Name"
                    value={user.lastName}
                    changeHandler={handleChange}
                    error={error ? error?.errors?.lastName : ''}
                    type="text"
                    placeholder="Enter Your Last Name"
                />
                <Input
                    name="email"
                    label="Email"
                    value={user.email}
                    changeHandler={handleChange}
                    error={error ? error?.errors?.email : ''}
                    type="email"
                    placeholder="Enter Your Email"
                />
                <Input
                    name="phoneNumber"
                    label="Phone"
                    value={user.phoneNumber}
                    changeHandler={handleChange}
                    error={error ? error?.errors?.phoneNumber : ''}
                    type="text"
                    placeholder="Enter Your Phone Number"
                />
                <Input
                    name="employeeId"
                    label="Employee ID"
                    value={user.employeeId}
                    changeHandler={handleChange}
                    error={error ? error?.errors?.employeeId : ''}
                    type="text"
                    placeholder="Enter Your Employee ID"
                />

                <DropdownInput
                    label="Department"
                    error={error ? error?.errors?.department : ''}
                    options={['HR', 'IT', 'Finance', 'Admin', 'Marketing', 'Sales', 'Production']}
                    name="department"
                    changeHandler={handleChange}
                />
                <DropdownInput
                    label="Designation"
                    error={error ? error?.errors?.employeePost : ''}
                    options={['Manager', 'Supervisor', 'Executive', 'Trainee']}
                    name="employeePost"
                    changeHandler={handleChange}
                />
                <DropdownInput
                    label="Role"
                    error={error ? error?.errors?.role : ''}
                    options={['Admin', 'Analyst', 'User']}
                    name="role"
                    changeHandler={handleChange}
                />
                <Input
                    name="password"
                    label="Password"
                    value={user.password}
                    changeHandler={handleChange}
                    error={error ? error?.errors?.password : ''}
                    type="password"
                    placeholder="Enter Your Password"
                />
                <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    value={user.confirmPassword}
                    changeHandler={handleChange}
                    error={error ? error?.errors?.confirmPassword : ''}
                    type="password"
                    placeholder="Confirm Your Password"
                />
                <Credential error={error ? error.message : ''} />
            </Form>
        </main>
    );
};

export default AddUser;
