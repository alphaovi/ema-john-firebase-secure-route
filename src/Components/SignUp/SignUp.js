import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    


    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };

    if(user){
        navigate("/shop");
    }
    
    const handleCreateuser = (event) => {
        event.preventDefault();
        if(password !== confirmPassword ) {
            setError("Your two passwords didn't match");
            return;
        }
        if(password.length < 6){
            setError("password must be 6 characters or longer");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="form-container">
            <div>
                <h3 className="form-title">Sign Up</h3>
                <form onSubmit={handleCreateuser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">New Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" required />
                    </div>
                    <p style={{color: "red"}}>{error}</p>;
                    <div className="input-group">
                        <input className="form-submit" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p>Already Have an account? <Link className="form-link" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;