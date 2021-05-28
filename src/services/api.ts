import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.0.104:3333',
});

export { api };

// json-server server.json --host 10.10.0.104 --port 3333
