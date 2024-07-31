import { createAction, props } from '@ngrx/store';
import { Person } from '../../models/models';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: Person[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const addUser = createAction('[User] Add User', props<{ user: Person }>());
export const addUserSuccess = createAction('[User] Add User Success', props<{ user: Person }>());
export const addUserFailure = createAction('[User] Add User Failure', props<{ error: any }>());
