import { createReducer, on } from "@ngrx/store";
import * as UserActions from "./user.actions";
import { Person } from "../../models/models";

export interface UserState {
  users: Person[];
  error: any;
}

export const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),
  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(UserActions.addUserFailure, (state, { error }) => ({ ...state, error })),
);
