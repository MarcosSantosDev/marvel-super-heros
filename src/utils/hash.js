import md5 from 'md5';
import moment from 'moment';
import { API_PRIVKEY, API_PUBKEY} from "../config";

export const TS = moment().unix();

export const hashMain =( md5(TS + API_PRIVKEY + API_PUBKEY));