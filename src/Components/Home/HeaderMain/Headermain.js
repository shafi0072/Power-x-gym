import React, { useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './HeaderMain.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Headermain = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    return (
        <div className='mainHeader'>
            <Navbar/>
            <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 ">
                    <div className="mt-5">
                    <h1 data-aos='fade-left' className="text-light HeaderText" style={{fontFamily: "'Anton', sans-serif"}}>THE BEST FITNESS <br/> STUDIO IN TOWN</h1>
                    </div>
                    <div className="mt-4">
                        <p data-aos='fade-right' className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id libero totam cum autem aspernatur veritatis nesciunt possimus, cupiditate commodi atque cumque nemo, nihil quibusdam vel temporibus porro ratione impedit doloremque. Id iusto illum similique. Facere nam aperiam autem vitae?</p>
                    </div>
                    <div className="mt-4">
                        <button data-aos='fade-left' className="btn btn-warning pt-2 pb-1 pl-4 pr-4"><h4 className="button-text" style={{fontFamily: "'Anton', sans-serif"}}>JOIN US</h4></button>
                    </div>
                </div>
                <div className="cl-md-6"></div>
            </div>
            </div>
        </div>
    );
};

export default Headermain;