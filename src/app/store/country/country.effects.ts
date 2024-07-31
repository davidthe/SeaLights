import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Country } from '../../models/models';
import * as CountryActions from './country.actions';

@Injectable()
export class CountryEffects {
    loadCountries$;
    constructor(private actions$: Actions, private http: HttpClient) {
        this.loadCountries$ = createEffect(() =>
            this.actions$.pipe(
                ofType(CountryActions.loadCountries),
                mergeMap(() =>
                    this.http.get<Country[]>('/api/countries').pipe(
                        map(countries => CountryActions.loadCountriesSuccess({ countries })),
                        catchError(error => of(CountryActions.loadCountriesFailure({ error })))
                    )
                )
            )
        );
    }


}
