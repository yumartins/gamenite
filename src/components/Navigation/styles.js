import styled from 'styled-components';

export const Container = styled.section`
    padding: 1.5rem 1.5rem 0 1.5rem;
    box-sizing: border-box;
    max-width: 17.5rem;
    width: 100%;
    height: 100vh;
    border-right: .125rem solid #15161F;
`;

export const Menu = styled.div`
    margin-top: 4.5rem;

    .navigation {

        &__menu {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
        }

        &__link {
            font-size: .875rem;
            opacity: .4;
            color: #FFF;
            font-weight: 500;
            display: flex;
            align-items: center;

            svg {
                margin-right: 2rem;
            }

            &:not(:first-child) {
                margin-top: 1.25rem;
            }

            &.active {
                opacity: 1;
            }

            &.nav_link {

                /* CORRECT ALIGN ICON */
                &:nth-child(3) {
                    margin-left: .15rem;
                }

            }

        }

        &__browser {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 4rem;
        }

    }

`;