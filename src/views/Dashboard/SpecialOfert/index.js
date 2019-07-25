import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import data from './data.json';
import Icons from '~/components/Icons';
import { Container } from './styles';
import { SmallTitle, MediumTitle, PrimaryButton, SecondaryButton, IconButton } from '~/styles/Themes';

export default function SpecialOfert() {

    const [ oferts, setOferts ] = useState();

    useEffect(() => {
        setOferts(data.games);
    }, [])

    return (

        <Container>

            <div className = 'oferts__title'>

                <SmallTitle className = 'title_slider'>SPECIAL OFFERT</SmallTitle>

                <Link to = '/special-offers'><SecondaryButton>View More</SecondaryButton></Link>

            </div>

            <ul className = 'oferts__list'>

                { oferts && oferts.slice(0, 3).map( ofert => (

                    <li className = 'oferts__item' key = { ofert.id } >

                        <img src = { ofert.path } className = 'image' alt = 'Special Ofert' />

                        <div className = 'content'>

                            <div className = 'info'>

                                <MediumTitle>{ ofert.title }</MediumTitle>
                                <p className = 'description'>{ ofert.description }</p>

                                <SmallTitle>{ ofert.callout }</SmallTitle>

                            </div>

                            <div className = 'buttons'>

                                <Link to = { ofert.url } ><PrimaryButton>Play</PrimaryButton></Link>
                                <IconButton><Icons name = 'heart_fill' width = { '1.125rem' } height = { '.875rem' } fill = { '#FFF' } /></IconButton>

                            </div>

                        </div>

                    </li>

                ) ) }

            </ul>

        </Container>

    )

}