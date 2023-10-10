import Weather from "../../components/whether/Weather";
import CardExampleCard from "../../components/whether/WeatherInfo";
import { Dimmer, Loader } from 'semantic-ui-react'



export default function WeatherPage(){
    return(
        <div>
            <Weather></Weather>
        </div>
    );
}