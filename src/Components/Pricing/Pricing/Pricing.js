import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeadPower from '../../Shared/HeadPower/HeadPower';
import PricingPlan from '../PricingPlan/PricingPlan';

const Pricing = () => {
    return (
        <div style={{backgroundColor:'black', maxHeight:'100%', width:'100%'}}>
            <HeadPower title="PRICING PLANS" />
            <div className="mt-5">
                <PricingPlan/>
            </div>
            <div className="mt-5 pb-5">
                <Footer/>
            </div>
        </div>
    );
};

export default Pricing;