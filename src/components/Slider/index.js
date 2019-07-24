import React, { useState, useEffect } from 'react';
import { Container } from './styles';

export default function Slider() {

    const imagePart = 4;
    const changeTo = null;
    const autoChangeTime = 4000;

    const [ slideActive, setSlideActive ] = useState(-1);
    const [ slidePrev, setSlidePrev ] = useState(-1);
    const [ slideReady, setSlideReady ] = useState(false);

    useEffect(() => {

        function changeSlides( change ) {

            window.clearTimeout(this.changeTo);
            const { length } = this.props.slides;
            const prevSlide = slideActive;
            let activeSlide = prevSlide + change;
            if( activeSlide < 0 ) activeSlide = length - 1;
            if( activeSlide >= length ) activeSlide = 0;
            setSlideActive();
            setSlidePrev();

        };

        function runAutoChangeTo() {

            this.changeTo = setTimeout(() => {
                changeSlides(1);
                runAutoChangeTo();
            }, this.autoChangeTime);

        }

        return () => {
            window.clearTimeout(changeTo);
        }

    })

    /* SET STATES */
    useEffect(() => {

        setTimeout(() => {
            setSlideActive(0);
            setSlideReady(true)
        }, 0);

    }, []);

    return(

        <Container>

            <div className = 'slider__slides'>

              

            </div>

        </Container>

    )

}