import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://62438e0439aae3e3b7441351.mockapi.io/musics'
});

export default api;