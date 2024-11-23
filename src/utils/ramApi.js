const baseUrl = "https://rickandmortyapi.com/api/";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(
      new Error(
        "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later"
      )
    );
  }
}

async function request(url) {
  const response = await fetch(url, options);
  return checkResponse(response);
}

async function getAllCharacters() {
  return request(`${baseUrl}/character`);
}

async function getAllLocations() {
  return request(`${baseUrl}/location`);
}

async function getAllEpisodes() {
  return request(`${baseUrl}/episode`);
}

async function goToOtherPage(otherUrl) {
  return request(otherUrl);
}

export { getAllCharacters, getAllLocations, getAllEpisodes, goToOtherPage };
