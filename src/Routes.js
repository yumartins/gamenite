import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from '~/components/Navigation';
import Dashboard from '~/views/Dashboard';

const Routes = () => (

    <BrowserRouter>

        <Navigation />
    
        <Switch>

            <Route exact path = '/' component = { Dashboard } />

        </Switch>
    
    </BrowserRouter>

)

export default Routes;