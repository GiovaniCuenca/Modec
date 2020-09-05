import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 40px;

    background-color: ${colors.footer};
    padding: 0px 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: ${colors.grayText}
    }
`;
