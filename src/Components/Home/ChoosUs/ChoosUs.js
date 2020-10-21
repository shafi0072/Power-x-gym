import React, { useEffect } from 'react';
import select1 from '../../../Image/Group 87.png';
import select2 from '../../../Image/Group 88.png';
import select3 from '../../../Image/gift-2.png';
import ChoosUsDetails from './ChoosUsDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
const ChoosUs = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const ChooSDetails = [
        {
            id:1,
            name:'FREE FITNESS TRAINING',
            img:select1,
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vero adipisci aut at rem eligendi quod veritatis libero dicta ab.'
        },
        {
            id:2,
            name:'TONS OF CARDIO & STRENGTH',
            img:select2,
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vero adipisci aut at rem eligendi quod veritatis libero dicta ab.'
        },
        {
            id:3,
            name:'NO COMMITMENT MEMBERSHIP',
            img:select3,
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed vero adipisci aut at rem eligendi quod veritatis libero dicta ab.'
        },
    ]
    return (
        <div id='blog' className='container'>
            <div className="text-center mt-5">
            <h1 data-aos='fade-right' className="text-warning" style={{fontFamily: "'Anton', sans-serif"}}>WHY <span className="text-light">CHOOSE US</span></h1>
            </div>
            <div className="mt-5 container">
                <div data-aos ='fade-left' className="row">
                    {
                        ChooSDetails.map(data => <ChoosUsDetails data={data}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChoosUs;