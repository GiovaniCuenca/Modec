import React, { useState, useEffect } from 'react'
import MapContainer from './components/MainMapContainer'
import { CustomModal } from '../../components'
import { MainMapContainer } from './styles'
import { OpenWeatherMap } from '../../config'
import api from '../../services/api'

const MainMap = () => {
    const [chosenMark, setChosenMark] = useState('');
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const handleCities = async () => {
        setIsLoading(true)
        // const response = await api.get(`data/2.5/find?lat=${'-23.5691402'}&lon=${'-46.7022257'}&cnt=15&APPID=${OpenWeatherMap.APP_ID}`);
        const response = await api.get(`http://api.openweathermap.org/data/2.5/find?lat=-22.9371726&lon=-47.046903&cnt=15&APPID=0b037c423a36a7d3e12f4df47b5c820d`);
        console.log(response.data.list)
        setCities(response.data.list);
        setIsLoading(false)
    }

    useEffect(() => {
        handleCities();
    }, [chosenMark]);

    const openModal = condition => {
        setIsOpen(condition);
    }

    const closeModal = condition => {
        setIsOpen(condition);
    }

    return (
        <>
            <CustomModal isOpen={isOpen} closeModal={() => closeModal()} citiesList={cities}/>

            <MainMapContainer>
                <div className="container">
                    <div className="map-wrapper">

                        <button onClick={openModal}>Open Modal</button>

                        {isLoading ? 'Loading..' : (
                            cities.map(teste =>
                                <h1>{teste.name}</h1>
                            )
                        )}
                        {/* <MapContainer /> */}
                    </div>
                </div>
            </MainMapContainer>
        </>
    )
}

export { MainMap }