import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative">
            <Link to="/" className="title">
                Welcome!
            </Link>

            <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/dictionary">Dictionary</NavLink>
                </li>

                <li>
                    <NavLink to="/finance">Finance</NavLink>
                </li>

                <li>
                    <NavLink to="/notes">Notes</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar;