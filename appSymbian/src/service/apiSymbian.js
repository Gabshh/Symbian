import axios from 'axios';

const apiSymbian = axios.create({
    baseURL:'http://10.107.144.32:3000'
});

export default apiSymbian;