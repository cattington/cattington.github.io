'use client';
import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">Home</Link>
            <div 
            className="menu" 
            onClick={() => {setMenuOpen(!menuOpen);
            }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}> 
                {/* <li>
                    <NavLink to="resume">Resume</NavLink>
                </li> */}
                <li>
                    <NavLink to="/engineering">Engineering</NavLink>
                </li>
                <li>
                    <NavLink to="art">Art</NavLink>
                </li>
                <li>
                    <NavLink to="music">Music</NavLink>
                </li> 
            </ul>
        </nav>
    );
}