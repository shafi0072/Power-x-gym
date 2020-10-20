import React, { useEffect } from 'react';
import HomeImg1 from '../../../Image/HomeImage1.jpg';
import HomeImg2 from '../../../Image/HomeImage2.jpg';
import HomeImg3 from '../../../Image/HomeImage3.jpg';
import hoverLogo1 from '../../../Image/Group 80.png';
import hoverLogo2 from '../../../Image/Group 81.png';
import hoverLogo3 from '../../../Image/Group 82.png'
import HomeClassDetails from '../HomeClassDetails/HomeClassDetails';
import Aos from 'aos';
import 'aos/dist/aos.css';
const HomeClass = () => {
    
    const HomeData  = [
        {
            id:1,
            name:'Progression',
            img:HomeImg1,
            logo:hoverLogo1,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eligendi.Lorem ipsum dolor sit .',
            fade:'up',
            time:'1000'
        },
        {
            id:2,
            name:'Work Out',
            img:HomeImg2,
            logo:hoverLogo2,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eligendi.Lorem ipsum dolor sit amet ',
            fade:'up',
            time:'2000'
        },
        {
            id:3,
            name:'Nutrition',
            img:HomeImg3,
            logo:hoverLogo3,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eligendi.Lorem ipsum dolor sit amet ',
            fade:'up',
            time:'3000'
        },
    ]
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    {
                        HomeData.map(data => <HomeClassDetails data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeClass;