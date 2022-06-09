import axios from "axios";

import {API_BASE_URL, API_KEY, TIMEOUT} from "../config/config";

// /axios global settings

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export const AxiosInstance = axios.create({

  baseURL: API_BASE_URL,
  key : API_KEY,
  timeout: TIMEOUT
});

// AxiosInstance.defaults.timeout = 5000;