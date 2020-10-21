import React, { useEffect } from 'react';
import './Chos.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const ChoosUsDetails = (props) => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const {name, img, description} = props.data;
    return (
        <div>
            <div data-aos='fade-in'  className="col-md-4 pt-5">
                <div 
                 style={{
                        width: '300px',
                        height: '50vh',
                        borderRadius: '10px'
                    }}
                    className="bg-light text-center p-5 ChoosDetails">
                    <img
                        style={{
                            maxWidth: '100%'
                        }}
                        src={img}
                        alt=""
                        className="img-fluid"/>
                    <h5 className='pt-5' style={{fontFamily: "'Anton', sans-serif"}}>{name}</h5>
                    <p className="">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChoosUsDetails;