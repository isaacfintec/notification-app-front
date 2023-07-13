import http from 'axios';

const client = http.create({
  baseURL: 'http://localhost:8000/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default client;
