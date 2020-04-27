import { IUserState } from "../states/IUserState";
import { AnyAction } from "redux";
import { EUserActions } from "../actions/userActions";

const DEFAULT_STATE: IUserState = {
  authenticated: false
};

export function userReducer(state = DEFAULT_STATE, action: AnyAction): IUserState {
  switch (action.type) {
    case EUserActions.TOGGLE_AUTH:
        return { ...state, authenticated: !state.authenticated };
    case EUserActions.SET_USERNAME:
      return { ...state, username: action.username };
    default:
        return state;
  }
}