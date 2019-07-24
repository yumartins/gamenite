import styled from 'styled-components';

export const ShinyTitle = styled.h6`
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-size: .675rem;
    line-height: 1;
`;

export const BigTitle = styled.h1`
    color: #FFF;
    font-weight: bold;
    font-size: 4.5rem;
`;

export const Button = styled.button`
    padding: .875rem 1.25rem;
    box-sizing: border-box;
    border-radius: .25rem;
    color: #FFF;
    border: none;
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: bold;
`;

export const PrimaryButton = styled(Button)`
    background-color: #2529D8;
`;

export const SecondaryButton = styled(Button)`
    background-color: rgba(255, 255, 255, .1);
`;


