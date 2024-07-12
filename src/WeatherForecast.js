import React , {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    const [dailyForecast, setDailyForecast] = useState(null);
    // console.log(props.data.city);

    function handleResponse(response){
        // console.log(response.data.daily[0]);
        setLoaded(true);
        setDailyForecast(response.data.daily);

    }
    
    if (loaded){
        // console.log(dailyForecast[0].temperature);
        return(
        <div className="WeatherForecast">
           <div className="row">
               <div className="col-2 forcastElement">
                   <div className="date">
                       Sun

                   </div>
                   <div className="icon">
                       <img src={dailyForecast[0].condition.icon_url} className="img-fluid"/>

                   </div>
                   <div >
                       <span className="maxTemp">{Math.round(dailyForecast[0].temperature.maximum)}º </span>
                       <span className="minTemp"> {Math.round(dailyForecast[0].temperature.minimum)}º</span>

                   </div>

               </div>
               
               
           </div>
        </div>
    );
        

    } else {
        let city = props.data.city;

        let apiKey = "4bc76te01aac743d12o764377f46072e";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
        return null
    }
}