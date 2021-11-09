const initialState = {
  loading: true,
  spaces: [],
  spaceDetails: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SPACES/fetched": {
      console.log("action", action);
      return {
        ...state,
        spaces: [...action.payload],
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
