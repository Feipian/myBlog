import 'semantic-ui-css/semantic.min.css'

import React, { useEffect, useState } from 'react'
import CardExampleCard from './WeatherInfo'


export default function Weather() {

    // store latitude and longitude
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    // store weather data
    const [data, setData] = useState([]);


    useEffect(() => {


        const fetchData = async () => {


            // set latitude and longitute
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
            await fetch(`${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result)
                });
            // console.log("Latitude is :", lat);
            // console.log("Longitude is :", long)
        }
        fetchData();
        console.log('data.main:', data.main)
    }, [lat, long]);


    return (
        <div>
            {(typeof data.main != 'undefined') ? (
                <CardExampleCard weatherData = { data }></CardExampleCard>
                
            ) : (
                <div>
                    No data!!
                </div>
            )}
        </div>
    )
}