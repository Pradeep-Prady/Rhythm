// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDp98ZXL19vJH-wRFLnoefErAUzFcYqo7iD2t1To6hLhCwyGVu90TBUoEME1xALmyuGtIAXOXEt_iKZQKr0BTv5StYXcvq-tJ1PbgMEaDmgl5p2kNKpk99cr_yGKsPHez_knati9DyvRUsugsgZMrves2FH7JVWhd2556WLx6hk1u-Ob0CeNojv3b3ynF4apaZrAQmyxDilYw74feH0FO16r1EQ0uIQKPfIniDBBVCZqw_lQ8DrYVUbBRvoFj_HWpaOFnhgu3WpPpHjHQiSGSrM';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);