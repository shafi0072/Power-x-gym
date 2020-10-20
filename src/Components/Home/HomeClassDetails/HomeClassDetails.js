import React, { useEffect } from 'react';
import './HomeClassDetails.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const HomeClassDetails = (props) => {
    const  {name, img, logo, description, fade,time} = props.data;
    useEffect(()  => {
        Aos.init({duration:`${time}`});
    },[])
    return (
        <div>
           <div>
           <div data-aos={`fade-${fade}`} className="col-md-4 mb-4">
                <div style={{width:'350px'}} className="imageDiv imageHover">
                <img style={{maxWidth:'100%'}} className="img-fluid imageTranslate" src={img} alt=""/>
                <div style={{maxWidth:'100%'}} className="detailsDiv text-center">
                    <img src={logo} style={{width:'40px'}} alt="" className="img-fluid"/>
                    <h2 className="text-light" style={{fontFamily: "'Anton', sans-serif"}}>{name}</h2>
                    <p className="text-light">{description}</p>
                </div>
                </div>

            </div>
           </div>
        </div>
    );
};

export default HomeClassDetails;