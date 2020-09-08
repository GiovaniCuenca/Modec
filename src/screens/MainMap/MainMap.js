import React, { useState, useEffect } from 'react'
import { CustomModal } from '../../components'
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import { MainMapContainer } from './styles'
import { OpenWeatherMap } from '../../config'
import api from '../../services/api'
import { FaSearch } from 'react-icons/fa'

const MainMap = () => {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [location, setLocation] = useState();
    const [initialLocation, setInicialLocation] = useState();

    const handleCities = async () => {
        if(!location) {
            return;
        }

        setIsLoading(true)
        const response = await api.get(`data/2.5/find?lat=${location.lat}&lon=${location.lng}&cnt=15&APPID=${OpenWeatherMap.APP_ID}`);
        setCities(response.data.list);
        setIsLoading(false)
    }

    const openModal = condition => {
        handleCities();
        setIsOpen(condition);
    }

    const closeModal = condition => {
        setIsOpen(condition);
    }

    const handleMouseClick = (x, y, lat, lng, event) => {
        const _lat = lat.latLng.lat()
        const _lng = lat.latLng.lng()

        setLocation({ lat: _lat, lng: _lng })
    }

    function getCurrentPosition() {
        setIsLoading(true)

        navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
            const pos = { lat, lng }
            console.log(pos)
            setInicialLocation(pos)
            setLocation(pos)
            setIsLoading(false)
            return;
        })
    }

    useEffect(() => {
        if(!location) {
            getCurrentPosition()
        }

        return;
    })

    return (
        <>
            <CustomModal isOpen={isOpen} closeModal={() => closeModal()} citiesList={cities} />

            <MainMapContainer>
                <div className="container">
                    <h1 className="page-title">Weather Assessment</h1>
                    <p className="page-content">Mark the Map with the desired Location and click at the "Search" button</p>

                    <button onClick={openModal} className="search-button">SEARCH <FaSearch size={16}/></button>

                    <GoogleMaps handleClick={handleMouseClick} location={location} initialLocation={initialLocation} />
                </div>
            </MainMapContainer>
        </>
    )
}

export { MainMap }