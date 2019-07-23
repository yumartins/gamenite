import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '~/components/Icons';

import Logo from '~/assets/logo.svg';
import { Container, Menu } from './styles';
import { TitleShiny } from '~/styles/Themes';
import data from './data.json';

export default function Navigation() {

    const [ menu, setMenu ] = useState();
    const [ categories, setCategories ] = useState();

    useEffect( () => {
        setMenu(data.menu);
        setCategories(data.categories);
    }, []);

    return(

        <Container>

            <img src = { Logo } className = 'logo' alt = 'Logo Gamenite' />
        
            <Menu>

                <TitleShiny>Menu</TitleShiny>

                <ul className = 'navigation__menu'>

                    { menu && menu.map( link => (

                        <NavLink 
                            to = { link.url } 
                            key = { link.id } 
                            className = 'navigation__link nav_link'
                            activeClassName = 'active'
                        >
                            <Icons name = { link.icon } size = '24px' fill = { '#FFF' } />
                            { link.title }
                        </NavLink>

                    ) ) }

                </ul>

                <div className = 'navigation__browser'>

                    <TitleShiny>Browse Categories</TitleShiny>
                    <Icons name = 'more' width = { '18px' } height = { '4px' } fill = { '#FFF' } />

                </div>
                           
                <ul className = 'navigation__menu'>

                    { categories && categories.map( link => (

                        <NavLink 
                            to = { link.url } 
                            key = { link.id } 
                            className = 'navigation__link nav_browser'
                            activeClassName = 'active'
                        >
                            <Icons name = { link.icon } fill = { '#FFF' } />
                            { link.title }
                        </NavLink>

                    ) ) }

                </ul>

            </Menu>
        
        </Container>

    )

}