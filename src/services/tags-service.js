import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : "http://localhost:4000";
const TAGS_API = `${BASE_URL}/api/tags`;

const api = axios.create({
  withCredentials: true,
});

export const findTrendingTags = () => {
  return api.get(`${TAGS_API}/trending`).then((response) => response.data);
};
