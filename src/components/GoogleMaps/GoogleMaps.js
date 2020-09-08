import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-grid-system'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const GoogleMaps = ({ handleClick, location, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [initialLocation, setInicialLocation] = useState();

    const getCurrentPosition = () => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
            const pos = { lat, lng }
            setInicialLocation(pos)
        })
    }

    useEffect(() => {
        if(!initialLocation) {
            getCurrentPosition()
        }
        setIsLoading(false)
    }, [initialLocation])


    useEffect(() => {
        getCurrentPosition()
    })

    return (
        <>
            {isLoading ? 'Loading...' : (
                <Row style={{ width: "100%" }}>
                    <Col style={{ width: "100%", height: "550px" }}>
                        <Map
                            google={props.google}
                            defaultZoom={10}
                            initialCenter={initialLocation}
                            onClick={(x, y, lat, lng, event) => handleClick(x, y, lat, lng, event)}
                        >
                            <Marker position={location} />
                        </Map>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB8e7EfWiO3D-Y_NcSCkElZaQMH3-9gAJs'
})(GoogleMaps);
