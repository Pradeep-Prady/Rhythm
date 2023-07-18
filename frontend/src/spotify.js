import axios from "axios";

const clientId = "745816b0ce074c41b9cffa3b4e2b8445";
const clientSecret = "14e076c74abd4fb5acf7412536ad70e4";
const space = "%20";
const endPoint = "https://accounts.spotify.com/authorize";
const redirect_url = "http://localhost:3000";
const scops = [
  "user-library-read",
  "playlist-read-private",
  "user-read-currently-playing",
  "user-read-playback-state",
];
const scopes_url = scops.join(space);

export const loginEndpoint = `${endPoint}?client_id=${clientId}&redirect_uri=${redirect_url}&scope=${scopes_url}&response_type=token&show_dialog=true`;

  
const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  // console.log(token);
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
