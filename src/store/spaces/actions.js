import axios from "axios";

const API_URL = "http://localhost:4000/spaces";

export const spacesFetched = (data) => ({
  type: "SPACES/fetched",
  payload: data,
});

export const removePost = (data) => ({
  type: "SPACES/remove",
  payload: data,
});

export const fetchSpaces = async (dispatch, getState) => {
  const response = await axios.get(`${API_URL}`);
  console.log("response", response);
  dispatch(spacesFetched(response.data));
};
