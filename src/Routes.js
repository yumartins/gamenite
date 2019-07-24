import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '~/components/Navigation';
import Dashboard from '~/views/Dashboard';

const Container = styled.section`
    display: flex;
`;

const Routes = () => (

    <BrowserRouter>

        <Container>

            <Navigation />
        
            <Switch>

                <Route exact path = '/' component = { Dashboard } />

            </Switch>

        </Container>
    
    </BrowserRouter>

)

export default Routes;