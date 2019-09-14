import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      state = Object.assign({}, state, {
        items: state.items.concat([action.payload])
      });

      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
