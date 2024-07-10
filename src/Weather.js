import React from "react";
import "./Weather.css";

export default function Weather(){
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
                            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cloudy"/>
                        </div>
                        <div className="col-2">
                            <span className="temprature">23 </span> 
                        </div>
                        <div className="col-3">
                            <span className="unit">ºC | ºF</span>
                        </div>
                        
                        <div className="col-5">
                            <ul>
                                <li>
                                    Precipitation: 11%
                                </li>
                                <li>
                                    Humidity: 66%
                                </li>
                                <li>
                                    Wind: 18 km/h
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-6 right-side">
                   <h1>Weather of CityName</h1>
                    <ul>
                        <li>
                            Date
                        </li>
                        <li>
                            description
                        </li>

                    </ul>

                </div>
            </div>

        </div>
        
    );
}