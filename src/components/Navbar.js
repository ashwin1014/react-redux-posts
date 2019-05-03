import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';


const Navbar = (props) => {
    console.log(props)
    return (

        <div className="navbar-fixed">
            <nav className="nav-wrapper blue darken-2">
                <div className="container">
                    <Link to="/" className="brand-logo">React Posts</Link>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default withRouter(Navbar);