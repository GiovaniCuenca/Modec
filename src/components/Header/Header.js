import React from 'react'

import logoHeader from '../../assets/images/logo-header.svg';
import { HeaderContainer, HeaderContent } from './styles';

const Header = ({user = 'Giovani Cuenca'}) => {
    const fullName = user.replace(" ", "+");

    return (
        <HeaderContainer>
            <div className="container">
                <HeaderContent>
                    <div className="logo">
                        <h2>Weather</h2>
                    </div>
                    <div className="userData">
                        <p>Giovani Cuenca</p>
                        <img src={`https://ui-avatars.com/api/?rounded=true&name=${fullName}&background=ffffff&color=2B2B2B&`} alt=""/>
                    </div>
                </HeaderContent>
            </div>
        </HeaderContainer>
    )
}

export { Header }