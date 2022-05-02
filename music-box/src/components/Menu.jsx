import React from 'react';
import logo from '../img/logo-verde.png';
import avatar from '../img/avatar.png';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <nav>
                <div className="container">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" className="logo"/>
                    </Link>
                    <img src={avatar} alt="Avatar" className="avatar"/>
                </div>
            </nav>

        </>
    )
}

export default Menu;