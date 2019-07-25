import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 2.5rem;

    .oferts {

        &__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__list {
            display: flex;
            align-items: center;
            width: 100%;
            margin-top: 2rem;
        }

        &__item {
            width: 100%;
            height: 15.5rem;
            position: relative;

            .image {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border: 1px solid rgba(255, 255, 255, .08);
                border-radius: .5rem;
            }

            .content {
                position: relative;
                z-index: 9;
                padding: 1.5rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;

                .info {

                    .description {
                        margin: .25rem 0 1rem 0;
                        font-size: .875rem;
                        font-weight: 500;
                        line-height: 2;
                        color: rgba(255, 255, 255, .6);
                    }

                }

                .buttons {
                    display: flex;
                    align-items: center;

                    .left {
                        margin-right: .75rem;
                    }

                }

            }

            &:not(:first-child) {
                margin-left: 1.5rem;
            }

        }

    }

`;