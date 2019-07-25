import React from 'react';

import Search from '~/components/Search';
import Icons from '~/components/Icons';
import { Container } from './styles';
import { ArrowButton, SmallTitle } from '~/styles/Themes';
import Avatar from '~/assets/avatar.svg';

export default function Sidebar() {

    return(

        <Container>

            <div className = 'sidebar__navigation'>

                <ArrowButton>
                    <Icons name = 'arrow_left' width = { '1rem' } height = { '.875rem' } fill = { '#FFF' } />
                </ArrowButton>

                <ArrowButton className = 'right' >
                    <Icons name = 'arrow_right' width = { '1rem' } height = { '.875rem' } fill = { '#FFF' } />
                </ArrowButton>

                <Search />

            </div>

            <div className = 'sidebar__user'>

                <div className = 'coins'>

                    <div className = 'value'>
                        <Icons name = 'coin' width = { '1.5rem' } height = { '.875rem' } strokeWidth = { '1.8px' } stroke = { '#FFF' } />
                        <span className = 'number'>29 921</span>
                    </div>

                    <span className = 'title'>Your Coins</span>

                </div>

                <ArrowButton>
                    <Icons name = 'mail' width = { '1.25rem' } height = { '1rem' } fill = { '#FFF' } />
                </ArrowButton>

                <ArrowButton className = 'right' >
                    <Icons name = 'bell' width = { '1.5rem' } height = { '1.625rem' } fill = { '#2529D8' } />
                </ArrowButton>

                <span className = 'divider'></span>

                <div className = 'user'>

                    <img src = { Avatar } className = 'avatar' alt = 'avatar' />

                    <div className = 'user_info'>
                        <SmallTitle>Bartek Zieman</SmallTitle>
                        <span className = 'state'>SzkolnyChłopakQ</span>
                    </div>

                    <Icons name = 'chevron_down' width = { '.875rem' } height = { '.5rem' } fill = { '#FFF' } />

                </div>

            </div>

        </Container>

    )

}