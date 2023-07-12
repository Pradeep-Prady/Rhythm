const authEndPoint = "https://accounts.spotify.com/authorize";
const clientId = "745816b0ce074c41b9cffa3b4e2b8445";
const clientSecret = "14e076c74abd4fb5acf7412536ad70e4"
const redirectUri = "http://locallhost:3000";
const responseType = "token";
const scopes = ["user-library-read", "playlist-read-private"];

// export const loginEndpoint = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;















// const authEndpoint = "https://accounts.spotify.com/authorize";
// const clientId = "745816b0ce074c41b9cffa3b4e2b8445";
// const redirectUri = "http://locallhost:3000";
// const scopes = ["user-library-read", "playlist-read-private"];
// const responseType = "token";
// const showDialog = true;

// // Construct the authorization URL
// export const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
//   redirectUri
// )}&scope=${scopes.join(
//   "%20"
// )}&response_type=${responseType}&show_dialog=${showDialog}`;

// // Redirect the user to the authorization URL
// window.location.href = authUrl;
