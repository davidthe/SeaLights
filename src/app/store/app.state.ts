import { userReducer } from './user.reducer';

export interface AppState {
  users: any[];
}

export const appReducers = {
  users: userReducer
};
