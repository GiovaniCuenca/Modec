import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 50px;
    z-index: 999999;

    background: linear-gradient(to right, ${colors.mainPrimary} 0, ${colors.mainSecondary} 100%);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
        width: 40px;
    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;

        h2 {
            color: ${colors.white};
            margin-left: 10px;
        }
    }

    .userData {
        display: flex;
        flex-direction: row;
        align-items: center;

        p {
            color: ${colors.white}
        }

        img {
            width: 30px;
            margin-left: 10px;
        }
    }

    @media(max-width: 1200px) {
    }

    @media(max-width: 992px) {
    }

    @media(max-width: 768px) {

    }

    @media(max-width: 576px) {
        p {
            display: none
        }
    }
`;