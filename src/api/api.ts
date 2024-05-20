import axios from 'axios';

const options = {
  url: 'https://jsonplaceholder.typicode.com/',
};

const api = axios.create({
  baseURL: options.url,
  headers: { Accept: 'application/json' },
});

export default { get: api.get, post: api.post };
