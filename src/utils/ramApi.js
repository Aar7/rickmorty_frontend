import ram from "rickmortyapi";
const baseUrl = "https://rickandmortyapi.com/api/";

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Something went wrong :(");
  }
}

function request(url, options) {
  return fetch(url, options);
}

async function getAllCharacters() {
  try {
    const response = await request(`${baseUrl}/character`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(response);
  } catch (error) {
    console.error(error);
  }
}

export { getAllCharacters };
