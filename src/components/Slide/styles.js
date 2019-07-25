import styled from 'styled-components';

export const Container = styled.section`
    position: relative;

    .title_slider {
        position: absolute;
        z-index: 12;
        top: 10rem;
        left: 2.5rem;
    }

`;

export const Content = styled.section`

    width: 100%;
    height: 48rem;
    overflow: hidden;
    position: relative;
    display: flex !important;
    flex-direction: column;
    justify-content: center;

    .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    .content {
        position: relative;
        z-index: 9;
        margin-left: 2.5rem;

        .title {
            max-width: 40rem;
            width: 100%;
        }

        .description {
            font-size: .875rem;
            color: rgba(255, 255, 255, .6);
            font-weight: 500;
            line-height: 2.4;
            margin-top: .75rem;
            max-width: 31.25rem;
            width: 100%;
        }

    }

    .buttons {
        margin-top: 1.25rem;

        .right {
            margin-left: .75rem;
        }

    }

`;