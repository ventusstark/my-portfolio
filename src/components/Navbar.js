import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">

            <div className="navbar-left">
                <a href="/" className="logo"> Poon Jeun Lek </a>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">

                    <li className='dropdown about-me'>
                        <a href='/about' class="dropdown-link"> ABOUT ME 
                        <span className="arrow">&#9662;</span>
                        </a>

                        <ul className="dropdown-menu">
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/about-me/achievements">Achievements</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                        </ul>
                    </li>


                    <li className='dropdown education'>
                        <a href='/education' class="dropdown-link"> EDUCATION 
                        <span className="arrow">&#9662;</span>
                        </a>

                        <ul className="dropdown-menu">
                            <li><a href="/education/primary-school">Primary School</a></li>
                            <li><a href="//education/secondary-school">Secondary School</a></li>
                            <li><a href="/education/post-secondary">Post - Secondary</a></li>
                        </ul>
                    </li>


                    <li className='dropdown uni-life'>                        
                        <a href='/university-life' class="dropdown-link"> UNIVERSITY LIFE 
                        <span className="arrow">&#9662;</span>
                        </a>

                        <ul className="dropdown-menu">
                            <li><a href="/university-life/uni-year1">Year 1</a></li>
                            <li><a href="/university-life/uni-year2">Year 2</a></li>
                            <li><a href="/university-life/uni-year3">Year 3</a></li>
                            <li><a href="/university-life/uni-year4">Year 4</a></li>
                        </ul>
                    </li>

                
                </ul>
            </div>

            <div className="navbar-right">
                <a href="/personal" className="personal-icon"/>
            </div>

        </nav>
    );
};

export default Navbar;