import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HQ95eiwu9A4k10Q5FAFRwEIupzacdOMUZNM3KdRRTW0'
    }
});