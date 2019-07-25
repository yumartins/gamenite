import styled from 'styled-components';

export const Content = styled.div`
    height: 2.75rem;
    display: flex;
    align-items: center;
    max-width: 18rem;
    width: 100%;

    .icon_button {
        border: none;
        background-color: transparent;
    }

    .input {
        height: 100%;
        border: none;
        background-color: transparent;
        margin-left: .5rem;
        font-size: .75rem;
        font-weight: 500;
        color: #FFF;
        width: 100%;

        &::placeholder {
            color: #FFF;
            opacity: .6;
            transition: all .4s ease-in-out;
        }

        &:hover {

            &::placeholder {
                opacity: 1;
            }

        }

    }

`;