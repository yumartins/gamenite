import React from 'react';

import Icons from '~/components/Icons';
import { Content } from './styles';

export default function Search() {

    return (

        <Content>

            <button className = 'icon_button'>
                <Icons name = 'search' width = { '24px' } height = { '24px' } fill = { '#FFF' } />
            </button>

            <input type = 'text' className = 'input' placeholder = 'Search name or type games, players…' />

        </Content>

    )

}