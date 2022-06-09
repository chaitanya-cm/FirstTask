import { API_BASE_URL, API_KEY } from "../config/config";
import { AxiosInstance } from "../util/AxiosInstance";

export const getDetails = async (cityname) =>{
    
    const URI = '/Weather.js';

    try {

        // const result = await AxiosInstance.get(URI, {timeout:5000});
        const {data} = await AxiosInstance.get(API_BASE_URL + `q=${cityname}&units=metric&appid=${API_KEY}`);
        return data;
    
      } catch (error) {
    
        console.log(error);
        throw error;
    
      }
}