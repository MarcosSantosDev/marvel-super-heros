import axios from 'axios';
import { TS, hashMain } from '../config/api-hash';

const { REACT_APP_API_PUBLIC_KEY } = process.env;

const Api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts: TS,
    apikey: REACT_APP_API_PUBLIC_KEY,
    hash: hashMain
  },
  Headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default Api;
