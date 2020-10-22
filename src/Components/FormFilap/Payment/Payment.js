import React, { useContext } from 'react';
import { userContext } from '../../../App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import CardFormPayment from './CardFormPayment';
import CheckoutForm from './CardFormPayment';
import PaymentIcon from '@material-ui/icons/Payment';
const stripePromise = loadStripe('pk_test_51Ha3LTJpKoGAIEKpzkLLXek8ifdmnmJHsWwowjeC2UDDvN5BdpefV5BHx2agbyG9KMLXpfH0Zf5DFaglVRbjPRWc00E3AdtpFX');


const Payment = () => {
    const [payment, setPayments] = useContext(userContext)
    const handleConfirm =() => { 
        const newPay = {...payment}
        newPay.isFormFilap = false;
        newPay.isPayments = true;
        newPay.isConfirm = true;
        setPayments(newPay);
        alert('Great Man You Successfully Done!!!')
    }
    return (
        <div style={{backgroundColor: 'rgb(49, 48, 48)', borderRadius:'20px', padding:'50px'}}>
             
            
             <Elements stripe={stripePromise}>
      {/* <CardFormPayment/> */}
      <PaymentIcon className="text-light"/>
      <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: 'white',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
    </Elements>
            <div className="mt-5">
            <button onClick={handleConfirm}  className="btn btn-warning pl-3 pr-3" style={{ fontFamily: "'Anton', sans-serif"}}>Confirm</button>
            </div>
        </div>
    );
};

export default Payment;