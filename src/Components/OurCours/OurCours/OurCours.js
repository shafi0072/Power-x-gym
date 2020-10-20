import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeadPower from '../../Shared/HeadPower/HeadPower';
import Classes from '../Classes/Classes';

const OurCours = () => {
    return (
        <div style={{backgroundColor:'black'}}>
            <HeadPower title="OUR CLASSES" />
            <div className="mt-5">
                <Classes/>
            </div>
            <div className="mt-5">
                <Footer/>
            </div>
        </div>
    );
};

export default OurCours;