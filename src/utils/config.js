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
  // "episode", // nested object
  "location", // nested object
  "origin", // nested object
];

export const EPI_OBJ_KEYS = [
  "name",
  "episode",
  "air_date",
  // "characters", // nested object
  // "url",
];

export const LOC_OBJ_KEYS = [
  "name",
  "type",
  "dimension",
  // "residents", // nested object
  // "url",
  "",
];

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

export const CLASSES = {
  showMoreButton: "query-wrapper__show-more",
  img: "itemcard__charImg itemcard__charImg_hidden",
};

export const TITLES = [
  "Pickle Rick!!!",
  "C-137 <3",
  "WLDD!!!",
  "Evil Morty Was Here",
  "I am Aliiiiveee!!",
  "Schwifty",
  // "",
];
