import React, { useEffect } from 'react';
import NavBar from '../Navbar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
const HeadPower = ({title}) => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    return (
        <div className='mainHeader'>
            <NavBar/>
            <div className="d-flex justify-content-center align-items-center">
            <h1 data-aos='fade-in' className='text-light text-center ' style={{fontSize:'70px', marginTop:'20%', fontFamily: "'Anton', sans-serif"}} >{title}</h1>
            </div>
        </div>
    );
};

export default HeadPower;