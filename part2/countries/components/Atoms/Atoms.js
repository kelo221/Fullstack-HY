import { atom } from "jotai";

const countryData = atom([])
const nameFilter =  atom('')


const Atoms = {
    countryData,
    nameFilter,
}

export default Atoms;