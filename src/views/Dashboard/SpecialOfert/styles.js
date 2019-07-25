import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
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
        }

        &__item {
            max-width: 30.75rem;
            width: 100%;
            height: 15.5rem;
            position: relative;
            border-radius: .5rem;

            .image {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .content {
                position: relative;
                z-index: 9;
            }

        }

    }

`;