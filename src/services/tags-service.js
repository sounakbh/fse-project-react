import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : "http://localhost:4000";
const USERS_API = `${BASE_URL}/api/users`;
const TUITS_API = `${BASE_URL}/api/tuits`;

const api = axios.create({
  withCredentials: true,
});

export const findTrendingTags = () =>
  //   api.get(`${USERS_API}/${userId}/likes`).then((response) => response.data);
  api
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
// .then((res) => console.log(res));

// export const findAllUsersThatLikedTuit = (tid) =>
//   api.get(`${TUITS_API}/${tid}/likes`).then((response) => response.data);

// export const userLikesTuit = (uid, tid) => {
//   return api
//     .put(`${USERS_API}/${uid}/likes/${tid}`)
//     .then((response) => response.data);
// };
