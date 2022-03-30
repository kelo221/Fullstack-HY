import axios from 'axios'

const productUrl = 'https://restcountries.com/v3.1/all'


//http://127.0.0.1:8000/api/user/products/backend?s=1921616&sort=asc&page=1

const getAllCountries = () => {
    console.log("make a request")
    const request = axios.get(`${productUrl}`)
    return request.then(response => response.data)
}


const functions = {
   getAllCountries,
};

export default functions;