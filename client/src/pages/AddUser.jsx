import Form from '../components/forms/Form';
import Header from '../components/forms/Header';
import Input from '../components/forms/Input';
import DropdownInput from '../components/forms/DropdownInput';
import PageTitle from '../components/PageTitle';
import Credential from '../components/forms/Credential';
const AddUser = () => {
    const onChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <main className="ms-sm-auto col-lg-10 px-md-4">
            <PageTitle title="Registration" />
            <br />
            <br />
            <Form>
                <Header text="Add User" />
                <Input
                    name="firstName"
                    label="First Name"
                    value=""
                    onChange
                    error=""
                    type="text"
                    placeholder="Enter Your First Name"
                />
                <Input
                    name="lastName"
                    label="Last Name"
                    value=""
                    onChange
                    error=""
                    type="text"
                    placeholder="Enter Your Last Name"
                />
                <Input
                    name="email"
                    label="Email"
                    value=""
                    onChange
                    error=""
                    type="email"
                    placeholder="Enter Your Email"
                />
                <Input
                    name="phoneNumber"
                    label="Phone"
                    value=""
                    onChange
                    error=""
                    type="text"
                    placeholder="Enter Your Phone Number"
                />
                <Input
                    name="employeeId"
                    label="Employee ID"
                    value=""
                    onChange
                    error=""
                    type="text"
                    placeholder="Enter Your Employee ID"
                />

                <DropdownInput
                    label="Department"
                    error=""
                    options={[]}
                    name="department"
                    onChange
                />
                <DropdownInput
                    label="Designation"
                    error=""
                    options={[]}
                    name="employeePost"
                    onChange
                />
                <DropdownInput label="Role" error="" options={[]} name="role" onChange />
                <Input
                    name="password"
                    label="Password"
                    value=""
                    onChange={onChange}
                    error=""
                    type="password"
                    placeholder="Enter Your Password"
                />
                <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    value=""
                    onChange={onChange}
                    error=""
                    type="password"
                    placeholder="Confirm Your Password"
                />
                <Credential error="" />

                <button
                    type="submit"
                    className="btn btn-outline-dark btn-info font-monospace btn-lg"
                >
                    Add
                </button>
            </Form>
        </main>
    );
};

export default AddUser;
