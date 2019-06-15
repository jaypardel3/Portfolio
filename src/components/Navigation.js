import React from 'react';
import { NavLink } from "react-router-dom";
import "../App.scss";
import "../index.scss";



const Navigation = () => {
    return (
            <div class="navigation">
                <div className="logo">
                    <NavLink className="link"  to="/"><span class="slash">/</span>Jay Pardel.</NavLink>
                </div>
                <div className="links">
                    <NavLink className="link"  to="/about">about</NavLink>
                    <NavLink className="link"  to="/projects">projects</NavLink>
                    <NavLink className="link"  to="/contact">contact</NavLink>
                </div> 
            </div>       
    )
}

export default Navigation;

