import axios from 'axios';
import {TS, hashMain} from './hash';
import { API_PUBKEY } from "../config";

const Api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {ts: TS,apikey: API_PUBKEY,hash: hashMain},
  Headers: { "Access-Control-Allow-Origin": "*"}
});

export default Api;