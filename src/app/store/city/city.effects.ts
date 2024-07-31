import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { City } from "../../models/models";
import * as CityActions from "./city.actions";

@Injectable()
export class CityEffects {
  loadCities$;
  addCity$;
  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {
    this.loadCities$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CityActions.loadCities),
        mergeMap((action) =>
          this.http.get<City[]>(`/api/cities/${action.countryId}`).pipe(
            map((cities) => CityActions.loadCitiesSuccess({ cities })),
            catchError((error) => of(CityActions.loadCitiesFailure({ error }))),
          ),
        ),
      ),
    );

    this.addCity$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CityActions.addCity),
        mergeMap((action) =>
          this.http.post<City>("/api/city", action.city).pipe(
            map((city) => CityActions.addCitySuccess({ city })),
            catchError((error) => of(CityActions.addCityFailure({ error }))),
          ),
        ),
      ),
    );
  }
}
