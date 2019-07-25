import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from '~/components/Sidebar';
import Navigation from '~/components/Navigation';
import Dashboard from '~/views/Dashboard';

const Routes = () => (

    <BrowserRouter>

        <Navigation />
        <Sidebar />
    
        <Switch>

            <Route exact path = '/' component = { Dashboard } />

        </Switch>
    
    </BrowserRouter>

)

export default Routes;