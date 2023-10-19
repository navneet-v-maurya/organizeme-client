import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/Types";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  userData: {},
  error: null,
};

const authReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userData: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        userData: {},
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
