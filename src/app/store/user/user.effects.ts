import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Person } from "../../models/models";
import * as UserActions from "./user.actions";

@Injectable()
export class UserEffects {
  loadUsers$;
  addUser$;

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() =>
          this.http.get<Person[]>("https://prospective-essy-davidmd-97b05cc8.koyeb.app/api/persons").pipe(
            map((users) => UserActions.loadUsersSuccess({ users })),
            catchError((error) => of(UserActions.loadUsersFailure({ error }))),
          ),
        ),
      ),
    );

    this.addUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.addUser),
        mergeMap((action) =>
          this.http.post<Person>("https://prospective-essy-davidmd-97b05cc8.koyeb.app/api/person", action.user).pipe(
            map((user) => UserActions.addUserSuccess({ user })),
            catchError((error) => of(UserActions.addUserFailure({ error }))),
          ),
        ),
      ),
    );
  }
}
