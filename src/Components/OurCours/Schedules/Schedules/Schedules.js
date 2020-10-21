import React from 'react';
import HeadPower from '../../../Shared/HeadPower/HeadPower';
import ClassSchedules from '../ClassSchedules/ClassSchedules';

const Schedules = () => {
    return (
        <div style={{backgroundColor:'black'}}>
            <HeadPower title="ADVANCE GYM"/>
            <div className="mt-5">
                <ClassSchedules/>
            </div>
        </div>
    );
};

export default Schedules;