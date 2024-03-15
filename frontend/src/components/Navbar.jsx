import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

export const Navbar = () => {

    {/* I have used useState for the boolean value that is used to check if the 
        menu is open or not. The setMenuOpen function is used to change the value of the
        menuOpen variable.
*/}
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative">
            <Link to="/" className="title">
                Welcome!
            </Link>

            {/* The three dashed icon of the menu that appears when the menu
                is closed.
            */}
            <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>


            {/* The menu that appears when the menu is open. The menuOpen variable. 
                Each NavLink element links to a different page of the website.
            */}
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