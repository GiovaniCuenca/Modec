import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { colors } from '../../styles/colors';
import { ModalWrapper } from './styles'
import { FaTimes } from 'react-icons/fa'

const customStyles = {
    content: {
        top: '50%',
        left: '80%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: `${colors.white}`,
        boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.15)',
        padding: '16px',
        borderRadius: '16px',
    }
};

Modal.setAppElement('#root')

const CustomModal = ({ isOpen, citiesList, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <ModalWrapper>
                <div className="close">
                    <button onClick={closeModal}>
                        <FaTimes size={20}/>
                    </button>
                </div>

                {citiesList && citiesList.map(city => (
                    <div className="modal-content">
                        <ul>
                            <li>
                                <Link to={{
                                    pathname: `/city/${city.name}`,
                                    cityInfo: city
                                }}
                                >{city.name}
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </ModalWrapper>
        </Modal>
    );
}

export { CustomModal }