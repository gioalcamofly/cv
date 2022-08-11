import React from 'react';
import './Header.css';

export function Header() {

    return (
        <header>
            <nav className='navbar'>
                <ul className='navlist'>
                    <li className='current'><a className="headerlink" href="#home">Home</a></li>
                    <li><a className="headerlink" href="#about">About</a></li>
                    <li><a className="headerlink" href="#portfolio">Portfolio</a></li>
                    <li><a className="headerlink" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )

}