import React, { createContext, useState } from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import OurCours from './Components/OurCours/OurCours/OurCours';

import Schedules from './Components/OurCours/Schedules/Schedules/Schedules';
import Pricing from './Components/Pricing/Pricing/Pricing';
import FormFilap from './Components/FormFilap/FormFilap';
export const userContext = createContext()
function App() {
    const [payment, setPayments] = useState({
        isFormFilap:true,
        isPayments: false,
        isConfirm: false,
    })
    return (
        <userContext.Provider value={[payment, setPayments]} className='App'>
            <Router>
                <Switch>
                    <Route exact="exact" path='/'>
                        <Home/>
                    </Route>
                    <Route path='/class'>
                        <OurCours/>
                    </Route>
                    <Route path='/schedule'>
                        <Schedules/>
                    </Route>
                    <Route path='/pricing'>
                        <Pricing/>
                    </Route>
                    <Route path='/form'>
                        <FormFilap />
                    </Route>
                </Switch>
            </Router>
        </userContext.Provider>
    );
}

export default App;
