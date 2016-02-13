/* eslint-disable no-undef */

export const constants = {
  ENV: $_ENV,
  API_URL: $_API_URL,
  APIEndpoints: {
    LOGIN: $_API_URL + '/login',
    HOSTS: $_API_URL + '/hosts',
    USERS: $_API_URL + '/users',
    COMMUNITY_LEADERS: $_API_URL + '/community_leaders'
  }
};
