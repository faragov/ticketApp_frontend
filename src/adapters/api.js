import wretch from "wretch";

const basePath = process.env.REACT_APP_API_BASE_URL

const api = {
  get: (endpoint) => wretch(`${basePath}/${endpoint}`).get(),
  post: (endpoint, body) =>
    wretch(`${basePath}/${endpoint}`).post(body)
};

export default{ api };
