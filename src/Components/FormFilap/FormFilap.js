
import React, { useContext } from 'react';
import { userContext } from '../../App';
import Footer from '../Shared/Footer/Footer';
import HeadPower from '../Shared/HeadPower/HeadPower';
import './FormFilap.css';
import FormInfo from './FormInfo';
import FormInfo2 from './FormInfo2';
import Payment from './Payment/Payment';
const FormFilap = () => {
    const [payment, setPayments] = useContext(userContext);
    return (
        <div style={{backgroundColor:'black'}} >
           
                <HeadPower title="YOUR GYM MEMBERSHIP" />
                <div className="container">
            <div className="text-center">
                <div className="steps">
                    <span className="bg-warning"style={{fontSize:'20px', marginTop:'20%', fontFamily: "'Anton', sans-serif", paddingLeft:'20px', paddingRight:'20px',borderRadius:'100%'}}  >1</span>
                    <span className="text-warning">------------------</span>
                    <span className={`${payment.isPayments && "bg-warning"} `}style={{fontSize:'20px',backgroundColor:'white', marginTop:'20%', fontFamily: "'Anton', sans-serif", paddingLeft:'20px', paddingRight:'20px',borderRadius:'100%'}}  >2</span>
                    <span className={`${payment.isPayments && "text-warning"}`} style={{color:'white'}}>------------------</span>
                    <span className={`${payment.isConfirm && "bg-warning"} `}style={{fontSize:'20px',backgroundColor:'white', marginTop:'20%', fontFamily: "'Anton', sans-serif", paddingLeft:'20px', paddingRight:'20px',borderRadius:'100%'}}>3</span>
                </div>
            </div>
            {
                payment.isFormFilap && <div className="row mt-5 p-4" style={{backgroundColor: 'rgb(49, 48, 48)', borderRadius:'20px'}}>
                <div className="col-md-6">
                {
                    payment.isFormFilap && <FormInfo />
                }
                </div>
                <div className="col-md-6">
                    <FormInfo2/>
                </div>
            </div>
            }
            <div className="mt-5">
            {
                payment.isPayments && <Payment/>
            }
            </div>
           </div>
           
           <Footer/>
        </div>
    );
};

export default FormFilap;