import React from 'react';
import "./Header.css";
import image from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);        
    }
    return (
        <nav className="header-nav">
            <img src={image} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;