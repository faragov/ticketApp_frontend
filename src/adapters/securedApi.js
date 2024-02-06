import wretch from "wretch";

const basePath = process.env.REACT_APP_API_BASE_URL;

const wretchApi = (endpoint) => wretch(`${basePath}/${endpoint}`);

const api = {
  get: (endpoint, token) => wretchApi(endpoint).auth(`Bearer ${token}`).get(),
  post: (endpoint, token, body) =>
    wretchApi(endpoint).auth(`Bearer ${token}`).post(body),
  put: (endpoint, token, body) =>
    wretchApi(endpoint).auth(`Bearer ${token}`).put(body),
};

export default api;
