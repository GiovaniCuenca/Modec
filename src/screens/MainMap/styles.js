import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const MainMapContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .search-button {
        background-color: ${colors.modecBlue};
        border: 0;
        border-bottom: 4px solid ${colors.modecBlueLighter};
        padding: 8px 32px;
        color: ${colors.white};
        margin-bottom: 24px;

        svg {
            margin-left: 16px
        }
    }
`;
