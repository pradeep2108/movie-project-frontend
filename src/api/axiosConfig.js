import axios from 'axios';

 const http = axios.create({
    baseURL:'http://localhost:8081/api/reelreview',
    headers:{"Content-Type": "application/json"}
});

export default http;