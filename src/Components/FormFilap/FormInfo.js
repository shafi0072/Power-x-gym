import React from 'react';

const FormInfo = () => {
    return (
    <div>
        <form>
            <div class="form-group">
                <label className="text-light" for="formGroupExampleInput">First Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="First Name" /></div>
                <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Email</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Email" />
                        </div>
                        <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Date ob Birth</label>
                    <input
                        type="date"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Date ob Birth" />
                        </div>
                        <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Address line: 1</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Address line: 1" />
                        </div>
                        <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">City</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="City" />
                        </div>
                        
                </form>
            </div>
            );
};

export default FormInfo;