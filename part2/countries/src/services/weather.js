import axios from "axios";

const apiConfig = {
  baseUrl: "https://api.openweathermap.org/data/2.5",
  apiKey: import.meta.env.VITE_OW_API_KEY,
  paths: {
    getWeatherByCapital: (name) => `/weather?q=${name}&appid=${apiConfig.apiKey}`,
  },
};

const getWeatherByCapital = (name) => {
  return axios.get(`${apiConfig.baseUrl}${apiConfig.paths.getWeatherByCapital(name)}`);
};

export default { getWeatherByCapital };
