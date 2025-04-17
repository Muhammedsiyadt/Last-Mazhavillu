import { constants } from "../constants";

const initialState = {
  user: {},
  loading: true,
  fcmToken: "",
};

export function user(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
