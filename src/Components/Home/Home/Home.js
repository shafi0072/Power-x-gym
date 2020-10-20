import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import ChoosUs from '../ChoosUs/ChoosUs';
import Headermain from '../HeaderMain/Headermain';
import HomeClass from '../HomeClass/HomeClass';
import TrainingProgram from '../TrainingProgram/TrainingProgram';

const Home = () => {
    return (
        <div style={{backgroundColor:'black', margin:'0'}}>
            <Headermain/>
            <HomeClass/>
            <div className="mt-5">
            <AboutUs/>
            </div>
            <div className="mt-5">
                <TrainingProgram/>
            </div>
            <div className="mt-5">
                <ChoosUs/>
            </div>
            <div className="mt-5">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;