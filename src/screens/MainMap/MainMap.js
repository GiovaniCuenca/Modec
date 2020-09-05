import React from 'react'
import MapContainer from './components/MainMapContainer'
import { MainMapContainer } from './styles'

const MainMap = () => {
    return (
        <MainMapContainer>
            <div className="container">
                <div className="map-wrapper">
                    <MapContainer />
                </div>
            </div>
        </MainMapContainer>
    )
}

export { MainMap }