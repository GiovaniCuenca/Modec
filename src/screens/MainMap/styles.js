import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const MainMapContainer = styled.main`
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;

    .map-wrapper {
        width: 40%;
        height: 40%;
        background-color: yellow;
        padding: 24px;
    }
`;
