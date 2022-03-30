import Atoms from "./Atoms/Atoms"
import {atom, useAtom} from "jotai"
import React from 'react'
import Languages from "./Languages";


const Countries = () => {

    const [countries] = useAtom(Atoms.countryData);
    const [filter] = useAtom(Atoms.nameFilter);


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


    console.log(filtered.length)

    if (filtered.length === 1) {
        return (
            <React.Fragment>
                <div>
                <h1>{filtered[0].name.common}</h1>
                <p>{filtered[0].capital}</p>
                <p>{filtered[0].area}</p>

                <Languages filtered={filtered[0].languages}/>
                </div>
                <div style={{padding:"10px"}}>
                    <img src={filtered[0].flags.png}/>
                </div>
            </React.Fragment>
        )
    }


//console.log(countries[0].name.common)

    return (
        filtered.map(filteredPerson => (
            <React.Fragment key={filteredPerson.id}>
                <p>{filteredPerson.name.common}</p>
            </React.Fragment>
        ))
    )

}

export default Countries;