const baseUrl = "https://rickandmortyapi.com/api/";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

function checkResponse(response) {
  // console.log(response);
  if (response.ok) {
    return response.json();
  } else {
    // throw new Error("Something went wrong :(");
    return Promise.reject(
      new Error("There was an error fetching the requested data")
    );
  }
}

function request(url) {
  return fetch(url, options).then(checkResponse);
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

async function testEndpoints(endpoint, filter_1, index) {
  return request(`${baseUrl}/${endpoint}?name=${filter_1.name}`);
}

export { getAllCharacters, getAllLocations, getAllEpisodes, testEndpoints };
