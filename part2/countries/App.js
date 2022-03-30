import './App.css';
import {useEffect} from "react";
import requests from "./components/services/requests";
import {useAtom} from "jotai"

import Atoms from "./components/Atoms/Atoms"
import Countries from "./components/Countries";

function App() {

    const [nameFilter, setNameFilter] = useAtom(Atoms.nameFilter);
    const [countryData, setCountryData] = useAtom(Atoms.countryData);


    useEffect(() => {
        requests.getAllCountries()
            .then(countryData => {
                if (countryData)
                    setCountryData(countryData);
            })

    }, [setCountryData]); //<-- This is the dependency array

    const inputHandler = (event) => {
        setNameFilter(event.target.value)
    };

    return (
        <div className="App">
            <div>
                Find Countries <b/>
                <input
                    onChange={inputHandler}
                />
            </div>
            <Countries/>
        </div>



    );
}

export default App;
