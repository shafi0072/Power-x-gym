import React, { useEffect } from 'react';
import './TrainingProgram.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
const TrainingProgramDetails = (props) => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const {name, img,fade} = props.data
    return (
        <div>
            <div data-aos={`fade-${fade}`}  className="col-md-6 mb-4">
                <div style={{width:"500px", height:'200px'}} className="TrainingSize text-center">
                <img style={{maxWidth:"80%", maxHeight:'100%'}}  src={img} alt="" className="img-fluid"/>
                <div className="nameProgram bg-warning text-left p-2" style={{width:'350px'}}>
                 <h5 style={{fontFamily: "'Anton', sans-serif"}}>{name} </h5>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default TrainingProgramDetails;