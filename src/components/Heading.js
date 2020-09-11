import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../media/logo.svg'
import phone from '../media/phone.svg'
import placeholder from '../media/placeholder.svg'

export default function Heading() {
    return (
        <header>
            <nav className="nav">
                <div className="container nav__container">
                    <Link to="/" className="nav__logo">
                        <img className="nav__logo__img inject" src={logo} alt="Edilnicola Logo" />
                        <span className="nav__logo__text">Edilnicola</span>
                    </Link>
                    <ul className="nav__contacts" role="menu">
                        <li>
                            <span className="nav__contacts__circle icon-circle">
                                <img className="nav__contacts__img icon-circle__img inject" src={phone} alt="Edilnicola tel." />
                            </span>
                            <a href="tel:+393391278129" className="no-underline">+39 339 12 78 129</a>
                        </li>
                        <li>
                            <span className="nav__contacts__circle icon-circle">
                                <img className="nav__contacts__img icon-circle__img inject" src={placeholder} alt="Edilnicola Savona e provincia" />
                            </span>
                            <a href="#contacts" className="no-underline" data-animate-scroll>Savona e provincia</a>
                        </li>
                    </ul>

                    <ul className="menu">
                        <li><a href="#contacts" className="no-underline" data-animate-scroll>Contatti</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}