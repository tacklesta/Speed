import React from 'react';
import logo from './../../assets/logo.png';
import './Nav.css';

const Nav = () => {
    return ( 
        <div className = "nav-container">
        <div className = "nav-left">
        <img className = 'flash-logo' src = { logo } alt = "logo" />
        <p className = "flash-logo-text" >SpeedCheck</p> 
        </div>

        <div className = "nav-right">
        <a 
        href = "xyz.com"
        target = '_blank'
        className = "nav-link"
        rel = "noreferrer" >
        Check 
        </a> 
        </div> 
        </div>
    );
};

export default Nav;
