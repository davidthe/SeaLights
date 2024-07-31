import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountryState } from "./country.reducer";

export const selectCountryState =
  createFeatureSelector<CountryState>("countries");

export const selectAllCountries = createSelector(
  selectCountryState,
  (state: CountryState) => state.countries,
);

export const selectCountryError = createSelector(
  selectCountryState,
  (state: CountryState) => state.error,
);
