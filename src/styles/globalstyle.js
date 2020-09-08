import { createGlobalStyle } from 'styled-components';
import { colors } from './colors'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        background-color: ${colors.background}
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font: 14px 'Roboto', sans-serif
    }

    a {
        text-decoration: none;
        color: ${colors.modecGray};

        :hover {
            color: ${colors.modecBlue};
        }
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    .page-title {
        margin-bottom: 24px;
        font-size: 2rem;
        color: ${colors.modecBlue};
    }

    .page-content {
        margin-bottom: 24px;
        font-size: 1rem;
        color: ${colors.modecGray};
    }

    .container {
        max-width: 1190px;
        width: 100%;

        text-align: center;
    }

    .tooltip {
        border: 0;
        text-decoration: none;

        :hover {
            cursor: pointer;
            position: relative;
        }

        span {
            display: none;
        }

        :hover span {
            background-color: ${colors.grayText};
            color: ${colors.white};
            padding: 8px 16px;
            border-radius: 4px;
            display: block;
            z-index: 100;
            left: 0px;
            margin: 0px;
            width: max-content;
            position: absolute;
            top: -45px;
            text-decoration: none;
            font-size: 12px;
            font-weight: 500;

            &:after {
                content: "";
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                bottom: -6px;
                left: 10px;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;

                border-top: 6px solid ${colors.grayText};
            }
        }
    }

    @media(max-width: 1200px) {
        .container {
            padding: 0px 16px;
        }
    }

    @media(max-width: 992px) {
    }

    @media(max-width: 768px) {
    }

    @media(max-width: 576px) {
        .container {
            padding: 0px 8px;
        }
    }
`;
