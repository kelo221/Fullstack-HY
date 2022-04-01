import axios from 'axios'

const productUrl = 'https://restcountries.com/v3.1/all'
const weather = 'https://api.weatherapi.com/v1/current.json?key=174a62c0e5a2471d9df215247220104&q='

//http://127.0.0.1:8000/api/user/products/backend?s=1921616&sort=asc&page=1

const getAllCountries = () => {
    const request = axios.get(`${productUrl}`)
    return request.then(response => response.data)
}

const getWeather = (country) => {
    const request = axios.get(`${weather}+${country}`)
    return request.then(response => response.data)
}



const functions = {
   getAllCountries,
    getWeather
};

export default functions;