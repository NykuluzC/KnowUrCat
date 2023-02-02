import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1',
    headers: { 'X-Api-Key': 'jUj7ZMT6kO2cInyHLYklwA==SduHCqrxaOnKKbLj'},
});

export default axiosClient;