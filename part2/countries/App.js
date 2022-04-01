import './App.css';
import {useEffect} from "react";
import requests from "./components/services/requests";
import {useAtom} from "jotai"

import Atoms from "./components/Atoms/Atoms"
import Countries from "./components/Countries";
import Weather from "./components/Weather";

function App() {

    const [nameFilter, setNameFilter] = useAtom(Atoms.nameFilter);
    const [countryData, setCountryData] = useAtom(Atoms.countryData);
    const [showCountry, setToShow] = useAtom(Atoms.showCountry);
    const [gotData, setData] = useAtom(Atoms.gotData);


    useEffect(() => {
        requests.getAllCountries()
            .then(countryData => {
                if (countryData)
                    setCountryData(countryData);
            })




    }, [setCountryData]);

    const inputHandler = (event) => {
        setNameFilter(event.target.value)
    };

    return (


        <div className="App">

            <div>
                Find Countries <b/>
                <input

                    onChange={(e) => {
                        {
                            inputHandler(e)
                            setToShow(false)
                            setData(false)
                        }
                    }}
                />
            </div>
            <Countries/>
        </div>


    );
}

export default App;
