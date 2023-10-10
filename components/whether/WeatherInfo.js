

import React from "react";
import { Button, Card, CardContent, CardHeader } from "semantic-ui-react";
import moment from 'moment';
import styles from './WeatherInfo.module.css'

const refresh = () => {
    window.location.reload();
}

const CardExampleCard = ({ weatherData }) => {
    // console.log('CardExample:', weatherData)
    return (

        <>

            <div className={styles.main}>
                <div className={styles.top}>
                <p className={styles.header}>{weatherData.name}</p>
                <Button className={styles.button} inverted color="blue" circular icon='refresh' onClick={refresh}></Button>
                </div>
                
                <div className={styles.flex}>
                    <p className={styles.day}>Day: {moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                    <p className={styles.description}>{weatherData.weather[0].main}</p>
                </div>

                <div className={styles.flex}>
                    <p className={styles.temp }>Temprature: {weatherData.main.temp}</p>
                    <p className={ styles.temp }>Humidity:{weatherData.main.humidity}%</p>
                </div>

                <div className={styles.flex}>
                    <p className={styles.sunrise_sunset}>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p className={styles.sunrise_sunset}>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>
            </div>


            {/* <Card>
                <CardContent className="main">
                    <CardHeader className="header"> { weatherData.name}</CardHeader>
                    <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleDateString('en-IN') }</p> 
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleDateString('en-IN') }</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p className="day">Day: {moment().format('dddd')}</p>
                    <p>Date: {moment().format('LL')}</p>
                </CardContent>
            </Card> */}
        </>
    );
}

export default CardExampleCard;