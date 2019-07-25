import React from 'react';

import { Container, Divider } from './styles';
import Slide from '~/components/Slide';
import SpecialOfert from './SpecialOfert';
import Bestsellers from './Bestsellers';

const Dashboard = () => (

    <Container>
    
        <Slide />
        <SpecialOfert />

        <Divider />

        <Bestsellers />
    
    </Container>

)

export default Dashboard;