import EndPoint from "../../config/endpoint.config";

export const getTweets = (handleName, maxId) => {
  return fetch(`${EndPoint}/${handleName}${maxId ? `?max_id=${maxId}` : ""}`)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};
