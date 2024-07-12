import React from "react";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let forecast = props.data;
    
   
        return (
        <div className="WeatherForecast">
           <div className="row">
               {forecast.map(function (dailyForecast, index){
                   if(index<6){
                       return(
                           <div className="col-2 forcastElement">
                               <WeatherForecastDay data={dailyForecast}/>
                            </div>
                       );
                   } else {
                       return null;
                   }
               })}
           </div>
        </div>
    );
        }