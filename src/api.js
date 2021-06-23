import axios from "axios";

export const fetchTwentyMostRecent = () => {
  return axios
    .get(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=50"
    )
    .then(({ data: { features } }) => {
      return features;
    });
};

export const fetchAllThisMonth = () => {
  return axios
    .get(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-03-01&minmagnitude=5.0"
    )
    .then(({ data: { features } }) => {
      return features;
    });
};

export const fetchTopTwentyThisMonth = () => {
  return axios
    .get(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-03-01&minmagnitude=5.0&limit=20&orderby=magnitude"
    )
    .then(({ data: { features } }) => {
      return features;
    });
};

export const fetchTopTwentyThisYear = () => {
  return axios
    .get(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&minmagnitude=5.0&limit=50&orderby=magnitude"
    )
    .then(({ data: { features } }) => {
      return features;
    });
};

export const fetchToday = today => {
  return axios
    .get(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=magnitude&starttime=" +
        `${today}`
    )
    .then(({ data: { features } }) => {
      return features;
    });
};
export const fetchTopTwentyAllTime = () => {
  return axios
    .get(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=1900-01-01&minmagnitude=5.0&limit=50&orderby=magnitude"
    )
    .then(({ data: { features } }) => {
      return features;
    });
};
