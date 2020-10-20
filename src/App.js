import React from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import OurCours from './Components/OurCours/OurCours/OurCours';

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact="exact" path='/'>
                        <Home/>
                    </Route>
                    <Route path='/class'>
                        <OurCours/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
