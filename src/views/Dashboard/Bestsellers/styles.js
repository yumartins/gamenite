import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 2.5rem;

    .slick-slider {
        margin-top: 2rem;

        .slick-slide {
            max-width: 22.5rem;
            width: 100%;
            margin-left: 1.5rem;
        }

    }

    .title_bestesellers {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .buttons {
            display: flex;

            .right {
                margin-left: .75rem;
            }

        }

    }

    .bestsellers {

        &__item {
            width: 100%;

            .image {
                width: 100%;
                height: 13.25rem;
                object-fit: cover;
                border-radius: .5rem;
            }

            .content {
                display: flex;
                justify-content: space-between;
                margin-top: 1rem;

                .info {

                    .description {
                        font-size: .875rem;
                        font-weight: 500;
                        line-height: 2.4;
                        color: rgba(255, 255, 255, .6);
                    }

                }
            }

        }

    }

`;