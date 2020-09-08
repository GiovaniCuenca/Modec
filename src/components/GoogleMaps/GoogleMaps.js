import React from 'react';
import { Row, Col } from 'react-grid-system'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const GoogleMaps = ({ handleClick, location, initialLocation, ...props }) => {
    return (
        <>
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
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB8e7EfWiO3D-Y_NcSCkElZaQMH3-9gAJs'
})(GoogleMaps);
