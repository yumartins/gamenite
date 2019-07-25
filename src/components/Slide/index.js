import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import { SmallTitle, BigTitle, PrimaryButton, SecondaryButton } from '~/styles/Themes';

import data from './data.json';
import './slick.css'; 

export default function Slide() {

    const [ slides, setSlides ] = useState();

    useEffect(() => {
        setSlides(data.slides);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: 0,
        vertical: true
    }

   return (

        <Container>
            
            <SmallTitle className = 'title_slider'>Awarded and Recommended</SmallTitle>
       
            <Slider { ...settings }>

                { slides && slides.map( slide => (

                    <Content key = { slide.id }>

                        <img src = { slide.path } className = 'image' alt = 'image_slider' />

                        <div className = 'content'>

                            <BigTitle className = 'title'>{ slide.title }</BigTitle>
                            <p className = 'description'>{ slide.description }</p>

                            <div className = 'buttons'>
                                <Link to = { slide.url }><PrimaryButton>Install Game</PrimaryButton></Link>
                                <Link to = { slide.url } className = 'right'><SecondaryButton>Add to Favorites</SecondaryButton></Link>
                            </div>

                        </div>

                    </Content>

                )) }

            </Slider>

        </Container>    

   )

}