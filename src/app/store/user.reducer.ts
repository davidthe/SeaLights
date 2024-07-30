import { Action, createReducer, on } from '@ngrx/store';
import { addUser, loadUsersSuccess } from './user.actions';
import { Person } from '../models/models';

export const initialState: Person[] = [];

const _userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => [...state, user]),
  on(loadUsersSuccess, (state, { users }) => users)
);

export function userReducer(state: Person[] | undefined, action: Action<string>) {
  return _userReducer(state, action);
}
