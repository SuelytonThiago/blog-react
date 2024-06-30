import axios from 'axios';

const blogFetch = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-type":"application/json",
    }
})

export default blogFetch;