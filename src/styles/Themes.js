import styled from 'styled-components';

export const ShinyTitle = styled.h6`
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-size: .675rem;
    line-height: 1;
`;

export const SmallTitle = styled.h5`
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
    font-size: .75rem;
    line-height: 1;
`;

export const MediumTitle = styled.h4`
    color: #FFF;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1;
`;

export const BigTitle = styled.h1`
    color: #FFF;
    font-weight: bold;
    font-size: 4.5rem;
`;

export const Button = styled.button`
    padding: 0 1.25rem;
    box-sizing: border-box;
    border-radius: .25rem;
    height: 2.75rem;
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

export const ArrowButton = styled.button`
    background-color: transparent;  /* #030616 */
    border-radius: .25rem;
    border: solid 1px rgba(255, 255, 255, .08);
    height: 2.75rem;
    width: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconButton = styled.button`
    background-color: rgba(255, 255, 255, .1);
    border-radius: .25rem;
    border: none;
    height: 2.75rem;
    width: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;


