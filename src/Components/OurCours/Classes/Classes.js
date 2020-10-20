import React from 'react';
import image1 from '../../../Image/victor-freitas-WvDYdXDzkhs-unsplash.jpg';
import image2 from '../../../Image/baylee-gramling-5m4Z14SDL80-unsplash.jpg';
import image3 from '../../../Image/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg';
import image4 from '../../../Image/alora-griffiths-TuzrzArccvc-unsplash.jpg';
import image5 from '../../../Image/john-fornander-FIu48iuo_4g-unsplash.jpg';
import image6 from '../../../Image/sven-mieke-Lx_GDv7VA9M-unsplash.jpg';
import ChoosUsDetails from '../../Home/ChoosUs/ChoosUsDetails';
import ClassesDetails from './ClassesDetails';

const Classes = () => {
    const classesInfo = [
        {
            name:'PSYCHO TRAINING',
            id:1,
            img:image1,
            fade:'left'
        },
        {
            name:'SELF DEFENSE',
            id:2,
            img:image2,
            fade:'left'
        },
        {
            name:'ADVANCE GYM',
            id:3,
            img:image3,
            fade:'left'
        },
        {
            name:'CARDIO TRAINING',
            id:4,
            img:image4,
            fade:'right'
        },
        {
            name:'STRENGTH TRAINING',
            id:5,
            img:image5,
            fade:'right'
        },
        {
            name:'PSYCHO TRAINING',
            id:6,
            img:image6,
            fade:'right'
        }
    ]
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        classesInfo.map(data => <ClassesDetails data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;