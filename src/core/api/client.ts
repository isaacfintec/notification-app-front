// import http from 'axios';
import superagent from 'superagent';
import prefix from 'superagent-prefix';

const baseURL = 'http://localhost:8000/api/v1/';
const client = superagent
  .agent()
  .use(prefix(baseURL))
  .set('Content-Type', 'application/json');

export default client;
