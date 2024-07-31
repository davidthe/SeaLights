import { createReducer, on } from '@ngrx/store';
import * as CityActions from './city.actions';
import { City } from '../../models/models';

export interface CityState {
    cities: City[];
    error: any;
}

export const initialState: CityState = {
    cities: [],
    error: null
};

export const cityReducer = createReducer(
    initialState,
    on(CityActions.loadCitiesSuccess, (state, { cities }) => ({ ...state, cities })),
    on(CityActions.loadCitiesFailure, (state, { error }) => ({ ...state, error })),
    on(CityActions.addCitySuccess, (state, { city }) => ({ ...state, cities: [...state.cities, city] })),
    on(CityActions.addCityFailure, (state, { error }) => ({ ...state, error }))
);
