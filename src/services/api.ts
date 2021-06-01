import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/dyhalmeida/plantmanager',
});

export { api };

// json-server server.json --host 10.10.0.104 --port 3333
