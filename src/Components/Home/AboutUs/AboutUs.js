import React, { useEffect } from 'react';
import About from '../../../Image/About.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    return (
        <div>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div data-aos='fade-right' className="col-md-6 mt-5">
                        <img style={{width:'400px'}} src={About} alt="" className="img-fluid"/>
                    </div>
                    <div data-aos='fade-left' className="col-md-6 mt-5">
                        <h2 className="text-warning HeaderText" style={{fontFamily: "'Anton', sans-serif"}}>WE ARE HERE TO DREAM!</h2>
                        <h3 className="text-light" style={{fontFamily: "'Anton', sans-serif"}}>OUR TEAM IS HERE SURVE YOU.</h3>
                        <p className="mt-5 text-light" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, reiciendis esse nostrum obcaecati eveniet eum at quos tempora a inventore magni. Officiis sapiente vel id, libero itaque dolor eaque fuga sequi omnis odit, cum harum, explicabo numquam inventore magni. Autem aperiam, obcaecati doloremque dolores eveniet rerum! Ab mollitia natus impedit?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;