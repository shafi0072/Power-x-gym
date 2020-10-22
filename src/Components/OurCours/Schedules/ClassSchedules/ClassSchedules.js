import React, {useEffect} from 'react';
import GYMIMG from '../../../../Image/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DateDetail1 from '../DateDetail1/DateDetail1';
import DateDeatail2 from '../DateDetail1/DateDeatail2';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
const ClassSchedules = () => {
    const DateDetails1 = [
        {
            id: 1,
            day: 'Monday',
            time: '8:00AM - 9:00AM'
        }, {
            id: 2,
            day: 'Wednesday',
            time: '7:00AM - 8:00AM'
        }, {
            id: 3,
            day: 'Friday',
            time: '6:00AM - 7:00AM'
        }
    ];
    const DateDetails2 = [
        {
            id: 1,
            day: 'Tuesday',
            time: '10:00AM - 11:00AM'
        }, {
            id: 2,
            day: 'Thursday',
            time: '5:00PM - 6:00PM'
        }, {
            id: 3,
            day: 'Saturday',
            time: '7:00PM - 8:00PM'
        }
    ];
    useEffect(() => {
        Aos.init({duration: 2000});
        
    })
    const {id} = useParams()
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img data-aos='fade-right' src={GYMIMG} alt="" className="img-fluid"/>
                    <div className="mt-3">
                        <p data-aos='fade-right' className="text-light">Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Quod unde distinctio voluptate, facere fugit
                            corporis sint sunt blanditiis eos, iure animi. Obcaecati architecto deserunt
                            nostrum at accusantium maiores harum ea est, laborum, nemo natus reiciendis
                            neque. Fugiat, aperiam, iusto cum necessitatibus, eius porro ex fuga delectus
                            eum dolores voluptatum distinctio aspernatur modi. Exercitationem officia, natus
                            iure labore architecto qui voluptas.</p>
                        <div data-aos='fade-right' className="pt-3">
                            <CheckBoxIcon className="text-warning"/>
                            <strong className='text-light'>
                                Having Slimmer Shapely Thighs</strong>
                            <br/>
                            <br/>
                            <CheckBoxIcon className="text-warning"/>
                            <strong className='text-light'>
                                Getting Stronger Body</strong>
                            <br/>
                            <br/>
                            <CheckBoxIcon className="text-warning"/>
                            <strong className='text-light'>
                                Increased Metabolism</strong>
                            <br/>
                            <br/>
                            <CheckBoxIcon className="text-warning"/>
                            <strong className='text-light'>
                                Increased Muscular Endurance</strong>
                            <br/>
                            <br/>
                            <CheckBoxIcon className="text-warning"/>
                            <strong className='text-light'>
                                Maximum Results in Less Time</strong>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div data-aos='fade-left' className="col-md-6">
                            {DateDetails1.map(data => <DateDetail1 data={data}/>)}
                        </div>
                        <div data-aos='fade-left' className="col-md-6">
                            {DateDetails2.map(data => <DateDeatail2 data={data}/>)}
                            <div className="mt-5 d-flex ml-5 justify-content-end">
                            <Link to='/pricing'><button data-aos='fade-left' className="btn btn-warning pt-2 pb-1 pl-4 pr-4"><h4 className="button-text" style={{fontFamily: "'Anton', sans-serif"}}>JOIN US</h4></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ClassSchedules;