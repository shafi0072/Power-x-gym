import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
const Navbar = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        
    },[])
    return (
        <div>
            <div>
                <nav class={`navbar navbar-expand-lg navbar-dark navigation ${show && "navBlack"}`}>
                    <div className="container">
                    <Link class="navbar-brand " href="#">
                        <h1 style={{fontFamily: "'Anton', sans-serif"}}>Power
                            <span className="text-warning">X</span>
                        </h1>
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" >Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/class">Our Classes</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" href="#">Contract Us</Link>
                            </li>
                        </ul>

                    </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;