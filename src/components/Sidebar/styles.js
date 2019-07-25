import styled from 'styled-components';

export const Container = styled.section`
    position: absolute;
    width: 100%;
    height: 5.25rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    border-bottom: .125rem solid rgba(255, 255, 255, .06);
    padding: 0 3rem 0 20rem;
    box-sizing: border-box;

    .sidebar {

        &__navigation {
            display: flex;
            align-items: center;
            height: 100%;
            width: 100%;

            .right {
                margin: 0 1.25rem 0 .75rem;
            }

        }

        &__user {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            width: 100%;

            .coins {
                margin-right: 2.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                .value {
                    display: flex;
                    align-items: center;

                    .number {
                        color: #FFF;
                        margin-left: .5rem;
                        font-size: .75rem;
                        font-weight: bold;
                    }

                }

                .title {
                    font-size: .625rem;
                    color: rgba(255, 255, 255, .2);
                    font-weight: 500;
                    text-transform: uppercase;
                    margin-top: .25rem;
                }

            }

            .right {
                margin-left: .75rem;
            }

            .divider {
                margin: 0 2.5rem 0 1.25rem;
                width: 1px;
                height: 100%;
                background-color: rgba(255, 255, 255, .06);
            }

            .user {
                display: flex;
                align-items: center;

                .user_info {
                    margin: 0 2rem 0 1rem;

                    .state {
                        font-size: .625rem;
                        color: rgba(255, 255, 255, .2);
                        font-weight: 500;
                        text-transform: uppercase;
                        margin-top: .25rem;
                    }

                }

            }

        }

    }

`;