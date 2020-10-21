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
                    placeholder="Example input placeholder" /></div>
                <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Email</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder" />
                        </div>
                        <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Date ob Birth</label>
                    <input
                        type="date"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder" />
                        </div>
                        <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">Address line: 1</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder" />
                        </div>
                        <div class="form-group">
                    <label className="text-light" for="formGroupExampleInput2">City</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Another input placeholder" />
                        </div>
                        
                </form>
            </div>
            );
};

export default FormInfo;