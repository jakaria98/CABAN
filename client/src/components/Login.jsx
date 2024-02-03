import myStyle from './LoginStyle';
import React, { useEffect } from 'react';
import Input from './forms/Input';
import Credential from './forms/Credential';
import Header from './forms/Header';

const Login = ({ user, handleChange, submitHandle }) => {
    let { error } = user;
    return (
        <section className="vh-100" style={myStyle.sectionStyle}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={myStyle.cardStyle}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="./flight.jpg"
                                        alt="login form"
                                        className="img-fluid"
                                        style={myStyle.imageStyle}
                                    />
                                </div>

                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={submitHandle}>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <span className="h1 fw-bold mb-0">Logo</span>
                                            </div>
                                            <Header text="Sign in to Your Account" />
                                            <i class="bi bi-envelope-at-fill"></i>
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
                                                name="password"
                                                label="Password"
                                                value={user.password}
                                                changeHandler={handleChange}
                                                error={error ? error?.errors?.password : ''}
                                                type="password"
                                                placeholder="Enter Your Password"
                                            />

                                            <Credential error={error ? error.message : ''} />

                                            <div className="pt-1 mb-4">
                                                <button
                                                    className="btn btn-dark btn-lg font-monospace"
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
