// number of cards to show by default, and how many more to show upon clicking the 'show more' button
export const SHOW_CARDS = 3;

// Character nested objects
export const NESTED_CHAR_OBJS = {
  episode: [],
  location: { name: "", url: "" },
  origin: { name: "", url: "" },
};

export const CHAR_OBJ_KEYS = [
  "name",
  "gender",
  "species",
  "status",
  "type",
  // "url",
  // "episode",
  "location",
  "origin",
];

export const EPI_OBJ_KEYS = [
  "name",
  "episode",
  "air_date",
  // "characters",
  // "url",
];

export const LOC_OBJ_KEYS = [];

// to be used if cardData state variable in App.jsx needs to be initialised as such (if
// the current, emply initialisation object is causing the site to break)
export const CARD_DATA_INITIAL_STATE = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {
    name: "",
    url: "",
  },
  location: {
    name: "",
    url: "",
  },
  image: "",
  episode: [],
  url: "",
  created: "",
  air_date: "",
};
