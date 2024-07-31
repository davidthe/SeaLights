import { createAction, props } from "@ngrx/store";
import { City } from "../../models/models";

export const loadCities = createAction(
  "[City] Load Cities",
  props<{ countryId: number }>(),
);
export const loadCitiesSuccess = createAction(
  "[City] Load Cities Success",
  props<{ cities: City[] }>(),
);
export const loadCitiesFailure = createAction(
  "[City] Load Cities Failure",
  props<{ error: any }>(),
);

export const addCity = createAction("[City] Add City", props<{ city: City }>());
export const addCitySuccess = createAction(
  "[City] Add City Success",
  props<{ city: City }>(),
);
export const addCityFailure = createAction(
  "[City] Add City Failure",
  props<{ error: any }>(),
);
