import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SignUp from '../SignUp/SignUp';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/"

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(user){
        navigate(from, {replace:true});
    }
    return (
        <div className="form-container">
            <div>
                <h3 className="form-title">Login</h3>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>

                    {
                        loading && <p>Loading...</p>
                    }
                    <p style={{color: "red"}}>{error?.message}</p>

                    <div className="input-group">
                        <input className="form-submit" type="submit" value="Login" />
                    </div>
                </form>
                <p>New to Ema-ohn? <Link className="form-link" to="/signup">Create a new Account</Link></p>
            </div>
        </div>
    );
};

export default Login;