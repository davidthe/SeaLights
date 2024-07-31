import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CityState } from './city.reducer';

export const selectCityState = createFeatureSelector<CityState>('cities');

export const selectAllCities = createSelector(
    selectCityState,
    (state: CityState) => state.cities
);

export const selectCityError = createSelector(
    selectCityState,
    (state: CityState) => state.error
);
