import React, { useEffect } from 'react';
import Train1 from '../../../Image/Train1.jpg';
import Train2 from '../../../Image/Train2.png';
import TrainingProgramDetails from './TrainingProgramDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
const TrainingProgram = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const trainingPro = [
        {
            id:1,
            img:Train2,
            name:'YOGA TRAINING SESSION',
            fade:'left'
        },
        {
            id:2,
            img:Train1,
            name:'CARDIO TRAINING SESSION',
            fade:'right'
        }
    ]
    return (
        <div>
            <div className="container mt-5 text-center">
                <h1 data-aos='fade-up' className="mt-5 text-light" style={{fontFamily: "'Anton', sans-serif"}}>TRAINING <span className="text-warning">PROGRAMS</span></h1>
                <div className="mt-5">
                <div className="row  ">
                    {
                        trainingPro.map(data => <TrainingProgramDetails key={data.id} data={data} />)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingProgram;