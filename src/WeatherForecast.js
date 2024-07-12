import React from "react";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    // console.log(props.data.city);
    let forecast = props.data;
    console.log(props.data[0].temperature.maximum);
    
   
        // console.log(dailyForecast[0].temperature);
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
               
                   {/* <div className="date">
                       Sun

                   </div>
                   <div className="icon">
                       <img src={props.data[0].condition.icon_url} className="img-fluid" alt="hi"/>

                   </div>
                   <div >
                       <span className="maxTemp">{Math.round(props.data[0].temperature.maximum)}º </span>
                       <span className="minTemp"> {Math.round(props.data[0].temperature.minimum)}º</span>

                   </div> */}

               
               
               
           </div>
        </div>
    );
        }