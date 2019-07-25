import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import data from './data.json';
import Icons from '~/components/Icons';
import { Container } from './styles';
import { SmallTitle, MediumTitle, PrimaryButton, ArrowButton } from '~/styles/Themes';

export default function SpecialOfert() {

    const [ bestsellers, setBestsellers ] = useState();

    useEffect(() => {
      setBestsellers(data.games);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (

        <Container>

            <div className = 'title_bestesellers'>

                <SmallTitle className = 'title_slider'>Bestsellers</SmallTitle>

                <div className = 'buttons'>

                    <ArrowButton className = 'right' >
                        <Icons name = 'arrow_right' width = { '1rem' } height = { '.875rem' } fill = { '#FFF' } />
                    </ArrowButton>

                    <ArrowButton>
                        <Icons name = 'arrow_left' width = { '1rem' } height = { '.875rem' } fill = { '#FFF' } />
                    </ArrowButton>

                </div>

            </div>

            <Slider { ...settings } >

                { bestsellers && bestsellers.map( bestseller => (

                    <li className = 'bestsellers__item' key = { bestseller.id } >

                        <img src = { bestseller.path } className = 'image' alt = 'Special Ofert' />

                        <div className = 'content'>

                            <div className = 'info'>

                                <MediumTitle>{ bestseller.title }</MediumTitle>
                                <p className = 'description'>{ bestseller.price }</p>

                            </div>

                            <Link to = { bestseller.url } ><PrimaryButton>Buy Now</PrimaryButton></Link>

                        </div>

                    </li>

                ) ) }

            </Slider>

        </Container>

    )

}