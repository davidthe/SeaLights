import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/models';

export const loadCountries = createAction('[Country] Load Countries');
export const loadCountriesSuccess = createAction('[Country] Load Countries Success', props<{ countries: Country[] }>());
export const loadCountriesFailure = createAction('[Country] Load Countries Failure', props<{ error: any }>());
