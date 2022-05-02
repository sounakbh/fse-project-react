import axios from "axios";

// const BASE_URL = "https://cs5500-01-sp22.herokuapp.com";
const BASE_URL = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : "http://localhost:4000";

const TUITS_API = `${BASE_URL}/api/tuits`;
const USERS_API = `${BASE_URL}/api/users`;
const TAGS_API = `${BASE_URL}/api/tags`;
const TRENDING_API = `${BASE_URL}/api/trending`

const api = axios.create({
  withCredentials: true,
});

export const findAllTuits = () =>
  api.get(TUITS_API).then((response) => response.data);

export const findTuitById = (tid) =>
  api.get(`${TUITS_API}/${tid}`).then((response) => response.data);

export const findTuitByUser = (uid) =>
  api.get(`${USERS_API}/${uid}/tuits`).then((response) => response.data);

export const findTrendingTuits = () =>
    api.get(`${TRENDING_API}/tuits`).then((response) => response.data);

export const createTuit = (uid, tuit) => {
  let splitted = tuit.tuit.match(/#[a-z]+/gi);
  splitted = splitted.map((item) => item.replace("#", ""));
  tuit.tags = splitted;
  return api
    .post(`${USERS_API}/${uid}/tuits`, tuit)
    .then((response) => response.data);
};

export const updateTuit = (tid, tuit) =>
  api.post(`${TUITS_API}/${tid}`, tuit).then((response) => response.data);

export const deleteTuit = (tid) =>
  api.delete(`${TUITS_API}/${tid}`).then((response) => response.data);

export const getAllTuitsWithTags = (tagName) =>
  api.get(`${TUITS_API}/tags/${tagName}`).then((response) => response.data);
