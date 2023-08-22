import {API_URL, API_TOKEN} from '@env';

module.exports = {
  BASE_URL: API_URL,
  API_TOKEN: API_TOKEN,
  IMAGE_BASE_URL: API_URL.slice(0, API_URL.indexOf('/api')) + '/',
};
