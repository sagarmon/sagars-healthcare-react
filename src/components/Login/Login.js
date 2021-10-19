import React from 'react';
import useAuth from '../../hooks/useAuth';
import welcome from '../../images/welcomev33.png';

const Test = () => {
    const {
        user,
        handleGoogleSignIn,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        isLogin,
        handleNameChange,
        toggleLogin,
        error } = useAuth();
    return (
        <div>
            {user?.email ?
                <div className="bg-success text-white">
                    <h2>You are logged in using {user.email}</h2>
                    <img src={welcome} alt="" className="w-100" />
                </div>
                :
                <div>
                    <form onSubmit={handleRegistration} className="mt-5 px-5 d-grid justify-content-center">
                        <h3 className="text-dark mb-5">{isLogin ? "Login" : "Register"}</h3>
                        {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputName" className="">Name</label>
                            <div className="">
                                <input onBlur={handleNameChange} type="text" className="form-control" id="inputName" required />
                            </div>
                        </div>}

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="">Email</label>
                            <div className="">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="">Password</label>
                            <div className="">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">{error}</div>
                        <button type="submit" className="btn btn-success mb-2">
                            {isLogin ? "Login" : "Register"}
                        </button>
                        {/* <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset Password</button> */}
                    </form>
                    <hr />
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Google Sign In</button>
                </div>}
        </div>
    );
};

export default Test;