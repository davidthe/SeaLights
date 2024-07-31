import { createReducer, on } from "@ngrx/store";
import * as CountryActions from "./country.actions";
import { Country } from "../../models/models";

export interface CountryState {
  countries: Country[];
  error: any;
}

export const initialState: CountryState = {
  countries: [],
  error: null,
};

export const countryReducer = createReducer(
  initialState,
  on(CountryActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
  })),
  on(CountryActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);
