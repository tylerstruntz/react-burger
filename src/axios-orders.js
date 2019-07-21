import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-55754.firebaseio.com/'
});

export default instance;