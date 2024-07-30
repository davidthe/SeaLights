import { createAction, props } from '@ngrx/store';
import { City } from '../models/models';

export const addCity = createAction('[City Form] Add City', props<{ city: City }>());
export const loadCities = createAction('[City List] Load Cities');
export const loadCitiesSuccess = createAction('[City List] Load Cities Success', props<{ cities: City[] }>());
