import requests from "./services/requests";
import {useState} from "react";
import {useAtom} from "jotai";
import Atoms from "./Atoms/Atoms";

const Weather = () => {

    const [weather, setWeather] = useAtom(Atoms.weather);



    console.log(weather)

    if (weather === null){
        return null
    }

return(

<>
<p>
   {/* {weather.current.temp_c}*/}
</p>
</>
)
}

export default Weather;