import { Action, createReducer, on } from '@ngrx/store';
import { addCity, loadCitiesSuccess } from './city.actions';
import { City } from '../models/models';

export const initialState: City[] = [];

const _cityReducer = createReducer(
  initialState,
  on(addCity, (state, { city }) => [...state, city]),
  on(loadCitiesSuccess, (state, { cities }) => cities)
);

export function cityReducer(state: City[] | undefined, action: Action<string>) {
  return _cityReducer(state, action);
}
