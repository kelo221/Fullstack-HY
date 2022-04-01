import Languages from "./Languages";
import React from "react";

const CountryInformation = ({filtered}) => {

    console.log(filtered)

    if (filtered===undefined){
        return null
    }

return(
    <>
        <div>
            <h1>{filtered.name.common}</h1>
            <p>{filtered.capital}</p>
            <p>{filtered.area}</p>

            <Languages filtered={filtered.languages}/>
        </div>
        <div style={{padding: "10px"}}>
            <img src={filtered.flags.png}/>
        </div>
    </>
)
}

export default CountryInformation;