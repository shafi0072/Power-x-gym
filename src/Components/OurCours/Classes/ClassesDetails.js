import React, { useEffect } from 'react';
import './Classes.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const ClassesDetails = (props) => {
    useEffect(() => {
        Aos.init({duration:2000})
    })
    const {name, img ,fade} = props.data;
    return (
        
            <div data-aos={`fade-${fade}`} className="col-md-4 mb-4">
                <img style={{width:'400px', height:'270px'}} src={img} alt="" className="img-fluid"/>
                <div className="bg-warning p-2 text-center positioning" style={{width:'300px'}}>
    <h4 style={{fontFamily: "'Anton', sans-serif"}}>{name}</h4>
                </div>
            </div>
        
    );
};

export default ClassesDetails;