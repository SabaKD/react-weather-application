import React , { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(){
    const [weatherData, setWeatherData] = useState({ready : false});
    function handleResponse (response){
        // console.log(response.data.time);
        setWeatherData({
            ready: true,
            city:"Lisbon",
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            feelsLike: response.data.temperature.feels_like,
            icon: response.data.condition.icon_url,
            date: new Date(response.data.time *1000)

        })
        
    }

    function search(){
        let apiKey = "4bc76te01aac743d12o764377f46072e";
        let cityName = "Moscow";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    

    if (weatherData.ready){
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            
            <div className="row detail">
                <div className="col-6 left-side">
                    <div className="row">
                        <div className="col-2">
                            <img src={weatherData.icon} alt={weatherData.description} className=" img-fluid weather-icon"/>
                        </div>
                        <div className="col-2">
                            <span className="temperature">{Math.round(weatherData.temperature)} </span> 
                        </div>
                        <div className="col-3">
                            <span className="unit">ºC | ºF</span>
                        </div>
                        
                        <div className="col-5">
                            <ul>
                                <li>
                                    Feels like: {Math.round(weatherData.feelsLike)}
                                </li>
                                <li>
                                    Humidity: {weatherData.humidity}%
                                </li>
                                <li>
                                    Wind: {Math.round(weatherData.wind)} m/s
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-6 right-side">
                   <h1>Weather of {weatherData.city}</h1>
                    <ul>
                        <li>
                            <FormattedDate date={weatherData.date}/>
                        </li>
                        <li>
                            {weatherData.description}
                        </li>

                    </ul>

                </div>
            </div>

        </div>
        
    );
    } else {
        search();
        return ( 
            
            <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <div>
                <strong>Loading...</strong>
            </div>
            </div>
        );
    }
    
}