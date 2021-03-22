import axios from 'axios';

const apiEndpoint = axios.create({
    baseURL: 'https://desolate-brushlands-20405.herokuapp.com/api/v2'
});

export default apiEndpoint