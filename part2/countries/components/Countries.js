import Atoms from "./Atoms/Atoms"
import {atom, useAtom} from "jotai"
import React, {useState} from 'react'
import Languages from "./Languages";
import CountryInformation from "./CountryInformation";
import requests from "./services/requests";


const Countries = () => {


    const [gotData, setData] = useAtom(Atoms.gotData);

    const [countries] = useAtom(Atoms.countryData);
    const [filter] = useAtom(Atoms.nameFilter);
    const [showCountry, setToShow] = useAtom(Atoms.showCountry);
    const [listNumber, setListNumber] = useAtom(Atoms.listnum);
    const [weather, setWeather] = useAtom(Atoms.weather);

    if (countries[0] === undefined) {
        return null
    }

    const filtered = countries.filter(person => person.name.common.toLowerCase().includes(`${filter.toLowerCase()}`))

    if (filtered.length === 0) {
        return null
    }

    if (filtered.length > 10) {
        return (<p>Narrow your search</p>)
    }


    if (filtered.length === 1) {

        console.log(gotData)
        if (!gotData){
        //Not sure why does it keep pinging the server all the time
        requests.getWeather(filtered[0].name.common)
            .then(weather => {
                setData(true)
                if (weather)
                    setWeather(weather);
                console.log("GOT THIS", weather.current.temp_c)

            })
        }

        if (weather.current.temp_c === null){
            return null
        }


        return (
            <React.Fragment>
                <p>temperature: {weather.current.temp_c} C</p>
                <p>wind: {weather.current.wind_kph} Km/h</p>
                <CountryInformation filtered={filtered[0]}/>
            </React.Fragment>
        )
    }

    function Greeting({isLoggedIn,index, filtered}) {


        if (isLoggedIn && filtered !== null && (listNumber === index)) {
            return <CountryInformation filtered={filtered[index]}/>
        }
        return null
    }

    const Name = ({name}) => {
        if (!showCountry) {
            return <p>{name.name.common}</p>
        }
        return null
    };



    return (
        filtered.map((filteredPerson, index) => (
            <React.Fragment>

                <section style={{
                    display: "flex",
                    justifyContent: "center"
                }}>

                    <Name name={filteredPerson}/>


                    <Greeting isLoggedIn={showCountry} index={index} filtered={filtered}/>

                    <button id={index} onClick={() => {
                        setToShow(!showCountry)
                        setListNumber(index)
                    }}>
                        Show
                    </button>
                </section>
            </React.Fragment>
        ))
    )

}

export default Countries;