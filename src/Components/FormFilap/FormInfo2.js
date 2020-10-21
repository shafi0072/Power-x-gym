import React, { useContext } from 'react';
import { userContext } from '../../App';
import './FormFilap.css'
const FormInfo2 = () => {
    const [payment, setPayments] = useContext(userContext);
    const handlePayments = () => {
        const newPayments = {...payment}
        newPayments.isPayments = true;
        newPayments.isFormFilap = false;
        setPayments(newPayments);
    }
    return (
        <div>
            <form>
                <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput">Last Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Example input placeholder"/></div>
                <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Mobile</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder"/>
                </div>
                <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Gender</label>
                    <input
                        type="date"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder"/>
                </div>
                <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Country/Region</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder"/>
                </div>
                <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">postcode</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder"/>
                </div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-right FORMBTN">
                            <button onClick={handlePayments} className="btn btn-warning pl-3 pr-3" style={{ fontFamily: "'Anton', sans-serif"}}>NEXT</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormInfo2;