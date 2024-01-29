import myStyle from './LoginStyle';
import React, { useEffect } from 'react';

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
                                            <h5
                                                className="fw-normal mb-3 pb-3"
                                                style={myStyle.signInTextStyle}
                                            >
                                                Sign into your account
                                            </h5>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    className={
                                                        error?.errors?.email
                                                            ? 'form-control is-invalid'
                                                            : 'form-control'
                                                    }
                                                    onChange={handleChange}
                                                    name="email"
                                                    id="email"
                                                    value={user.email}
                                                    placeholder="Enter Your Email"
                                                />
                                                {error && error?.errors?.email && (
                                                    <div className="invalid-feedback" role="alert">
                                                        {error?.errors?.email?.msg}
                                                    </div>
                                                )}
                                                <label className="form-label">Email</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    className={
                                                        error?.errors?.password
                                                            ? 'form-control is-invalid'
                                                            : 'form-control'
                                                    }
                                                    name="password"
                                                    id="password"
                                                    onChange={handleChange}
                                                    value={user.password}
                                                    placeholder="Enter Your Password"
                                                />
                                                {error && error?.errors?.password && (
                                                    <div className="invalid-feedback" role="alert">
                                                        {error?.errors?.password?.msg}
                                                    </div>
                                                )}
                                                <label className="form-label">Password</label>
                                            </div>

                                            {error && error.message == 'Invalid credentials' && (
                                                <div className="alert alert-danger" role="alert">
                                                    {error.message}
                                                </div>
                                            )}
                                            <div className="pt-1 mb-4">
                                                <button
                                                    className="btn btn-dark btn-lg btn-block"
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
