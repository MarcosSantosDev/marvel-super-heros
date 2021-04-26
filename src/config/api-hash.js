import md5 from 'md5';
import moment from 'moment';

const { REACT_APP_API_PUBLIC_KEY, REACT_APP_API_PRIVATE_KEY } = process.env

export const TS = moment().unix();

export const hashMain = (md5(TS + REACT_APP_API_PRIVATE_KEY + REACT_APP_API_PUBLIC_KEY));
