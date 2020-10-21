import React, { useEffect } from 'react';
import PricingDetailsData from './PricingDetailsData';
import Aos from 'aos';
import 'aos/dist/aos.css';
const PricingPlan = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    const PricingData = [
        {
            id:'1',
            name:'ADVANCE PLAN',
            fade:'right',
            price:140
        },
        {
            id:'2',
            name:'BASIC PLAN',
            fade:'up',
            price:120
        },
        {
            id:'3',
            name:'BEGINNERS',
            fade:'left',
            price:90
        },
    ]
    return (
        <div className="container">
            <div className="text-center">
            <h1 data-aos="fade-left" style={{ fontFamily: "'Anton', sans-serif"}} className="text-warning">CHOOSE THE OFFER <span className="text-light">THAT SUITS YOU</span> </h1>
            <p data-aos="fade-right" className="text-light mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem fuga rem, <br/> inventore voluptates, recusandae culpa </p>
            </div>
            <div className="row d-flex justify-content-center mt-5 mb-5">
                {
                    PricingData.map(data => <PricingDetailsData data={data} />)
                }
            </div>
        </div>
    );
};

export default PricingPlan;