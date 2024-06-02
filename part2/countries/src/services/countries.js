import axios from "axios";

const apiConfig = {
  baseUrl: "https://studies.cs.helsinki.fi/restcountries/api",
  paths: {
    all: "/all",
    countryByName: (name) => `/name/${name}`,
  },
};

const getAll = () => {
  return axios.get(`${apiConfig.baseUrl}${apiConfig.paths.all}`);
};

const getCountryByName = (name) => {
  return axios.get(`${apiConfig.baseUrl}${apiConfig.paths.countryByName(name)}`);
};

export default { getAll, getCountryByName };
