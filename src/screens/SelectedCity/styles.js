import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SelectedCityContainer = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .back-button {
        position: absolute;
        top: 16px;
        left: 16px;
        border: 0;
        background-color: transparent;
        color: ${colors.modecGray};

        :hover {
            color: ${colors.modecBlue};

            transition: all 0.2s ease-in-out;
        }
    }

    .weather-container {
        display: flex;
        flex-direction: column;
        background-color: transparent;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
        padding: 24px;
        border-radius: 16px;
        width: 70%;

        .top-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            color: ${colors.grayText};

            .left {
                text-align: left;

                .temp-container {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-end;
                    justify-content: space-between;

                    .temperature {
                        font-size: 4rem;

                        span {
                            font-size: 3rem;
                        }
                    }
                }
            }

            .right {
                text-align: right;

                .temp-right {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    margin: 16px 0px;
                }
            }
        }

        .middle-container {

        }

        .footer-container {

        }
    }

    @media(max-width: 768px) {
        .weather-container {
            width: 100%;
        }
    }
`;
