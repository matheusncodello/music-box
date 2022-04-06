import React from 'react';
import logo from '../img/logo-verde.png';
import avatar from '../img/avatar.png';

function Menu() {
    return (
        <>
            <nav>
                <div className="container">
                    <img src={logo} alt="Logo" className="logo"/>
                    <img src={avatar} alt="Avatar" className="avatar"/>
                </div>
            </nav>

        </>
    )
}

export default Menu;