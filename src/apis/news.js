import axios from 'axios';

const KEY = "01c595ac8058484daf3d4b74f8107d6e";

export default axios.create({
    baseURL: 'https://newsapi.org'
});