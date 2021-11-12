import axios from "axios";

const API_URL = "http://localhost:4000/spaces";
const API_ME = "http://localhost:4000/me";

const newUserSpace = (data) => ({
  type: "user/gotMySpace",
  payload: data,
});

export const spacesFetched = (data) => ({
  type: "SPACES/fetched",
  payload: data,
});

export const fetchSpaces = async (dispatch, getState) => {
  const response = await axios.get(`${API_URL}`);
  console.log("response", response);
  dispatch(spacesFetched(response.data));
};

export const fetchASpace = async (dispatch, getState) => {
  const response = await axios.get(`${API_ME}`);
  console.log("response", response);
  dispatch(spacesFetched(response.data));
};

export const deleteStory = (id) => {
  return async (dispatch, getState) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:4000/spaces/story/${id}`, {
        headers: { Authorization: `Bearer ${getState().user.token}` },
      });
      const response = await axios.get(`${API_ME}`, {
        headers: { Authorization: `Bearer ${getState().user.token}` },
      });
      console.log("response", response);
      dispatch(newUserSpace(response.data.space));
    } catch (error) {
      console.log(error);
    }
  };
};
