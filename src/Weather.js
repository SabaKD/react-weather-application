import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </div>
            </form>
            
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="cloudy"/>
                    <span>23 </span> 
                    ºC | ºF
                    </div>
                    <div className="col-8">
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
                <div className="col-6">
                   
            <h1>Weather of City name</h1>
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