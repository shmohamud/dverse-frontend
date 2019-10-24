import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions/index";

const initialState = {
  user: null,
  email: "",
  password: "",
  loggedIn: false,
  loading: false,
  failure: false,
  token: null
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      state = {
        ...state,
        loading: true,
        email: action.email,
        password: action.password
      };
      return state;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.user,
        loggedIn: true,
        loading: false,
        email: "",
        password: "",
        token: action.token
      };
      return state;
    case LOGIN_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.error,
        failure: true
      };
      return state;
    case LOGOUT:
      state = { ...state, loggedIn: false, user: null, token: null };
      return state;
    default:
      return state;
  }
}