import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes/
// /r-api/?api=filmes/
// https://sujeitoprogramador.com/r-api/?api=filmes/

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;