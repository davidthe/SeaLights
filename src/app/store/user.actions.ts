import { createAction, props } from '@ngrx/store';
import { Person } from '../models/models';

export const addUser = createAction('[User Form] Add User', props<{ user: Person }>());
export const loadUsers = createAction('[User List] Load Users');
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: Person[] }>());
