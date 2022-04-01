import { atom } from "jotai";

const countryData = atom([])
const nameFilter =  atom('')
const showCountry = atom(false)
const listnum = atom(0)
const weather= atom({
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1648851604,
        "localtime": "2022-04-01 23:20"
    },
    "current": {
        "last_updated_epoch": 1648851300,
        "last_updated": "2022-04-01 23:15",
        "temp_c": 3.0,
        "temp_f": 37.4,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 3.8,
        "wind_kph": 6.1,
        "wind_degree": 350,
        "wind_dir": "N",
        "pressure_mb": 1021.0,
        "pressure_in": 30.15,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 75,
        "cloud": 0,
        "feelslike_c": 0.2,
        "feelslike_f": 32.3,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 1.0,
        "gust_mph": 9.4,
        "gust_kph": 15.1
    }
})

const gotData = atom(false)

const Atoms = {
    countryData,
    nameFilter,
    showCountry,
    listnum,weather,gotData
}

export default Atoms;