import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const ModalWrapper = styled.div`
    .close {
        position: absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        padding: 8px;
        color: ${colors.modecGray};

        button {
            border: 0;
            background-color: transparent;

            :hover {
                color: ${colors.modecRed};
            }
        }
    }

    .modal-content {
        ul {
            li {
                margin: 0px 0px 8px 0px;

                a {
                    font-size: 1.2rem;
                }
            }
        }
    }
`;
