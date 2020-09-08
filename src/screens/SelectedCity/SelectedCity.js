import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { OpenWeatherMap } from '../../config'
import api from '../../services/api'
import history from '../../services/history'

import { SelectedCityContainer } from './styles'
import { FaTemperatureLow, FaTemperatureHigh, FaArrowLeft } from 'react-icons/fa'

const SelectedCity = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [selectedCity, setSelectedCity] = useState([]);

    const { city } = useParams()
    const cityParams = props.location.cityInfo

    const handleCities = async () => {
        const response = await api.get(`data/2.5/weather?q=${city}&appid=${OpenWeatherMap.APP_ID}`);
        setSelectedCity(response.data);
    }

    useEffect(() => {
        if(!cityParams) {
            handleCities()
            return;
        }
        setSelectedCity(cityParams)
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [selectedCity] )

    const temperatureConverter = temp => {
        const _temp = temp.toString().substring(0, 2) + ',' + temp.toString().substring(3, 2)
        return _temp
    }

    return (
        <SelectedCityContainer>
            <button
                onClick={history.goBack}
                className="back-button"
            >
                <FaArrowLeft size={24} />
            </button>
            <div className="container">
                {isLoading ? 'Loading...' : (
                    <div className="weather-container">
                        <div className="top-container">
                            <div className="left">
                                <h1>{cityParams.name}</h1>
                                <p>{cityParams.sys.country}</p>
                                <div className="temp-container">
                                    <h1 className="temperature">{temperatureConverter(cityParams.main.temp)}<span>°C</span></h1>
                                </div>

                                <img src={`http://openweathermap.org/img/w/${cityParams.weather[0].icon}.png`} alt=""/>
                                <p>{cityParams.weather[0].description}</p>
                            </div>
                            <div className="right">
                                <div className="temp-right">
                                    <p>Min: </p>
                                    <p>{temperatureConverter(cityParams.main["temp_min"])}</p>
                                    <FaTemperatureLow size={20} color="#FFF" />
                                </div>

                                <div className="temp-right">
                                    <p>Max: </p>
                                    <p>{temperatureConverter(cityParams.main["temp_max"])}</p>
                                    <FaTemperatureHigh size={20} color="#FFF" />
                                </div>

                                <div className="temp-right">
                                    <p>Feels Like: </p>
                                    <p>{temperatureConverter(cityParams.main["temp_max"])}</p>
                                </div>

                            </div>
                        </div>
                        <div className="middle-container">

                        </div>
                    </div>
                )}
            </div>
        </SelectedCityContainer>
    )
}

export { SelectedCity }