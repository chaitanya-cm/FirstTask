// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const TIMEOUT = process.env.REACT_APP_API_TIMEOUT;
const API_KEY = '3b9669ce784eae23bf11fca67ff6cc4c';


try{
  if (!API_BASE_URL) {

    throw new Error(".env is missing the definition for REACT_APP_API_BASE_URL environment variable")
  }
  
  
  if (!TIMEOUT) {
  
    throw new Error(".env is missing the definition for REACT_APP_API_TIMEOUT environment variable")
  }
    
}catch(error){
  console.log(error);
}

export { API_BASE_URL, API_KEY, TIMEOUT }  