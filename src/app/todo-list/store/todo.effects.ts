import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import {of} from "rxjs";

import * as TodoActions from './todo.actions';
import {CustomAction, TodoResponseData} from "../../shared/interfaces";
import {normalizedData} from "../../shared/utils";


@Injectable()
export class TodoEffects {
  @Effect()
  loadItems = this.actions$.pipe(
    ofType(TodoActions.LOAD_ITEMS_REQUEST),
    switchMap(() => {
      return this.http.get<TodoResponseData>('/api/get');
    }),
    map(res => normalizedData(res.items)),
    map(items => new TodoActions.LoadItemsSuccess(items)),
    catchError(errorRes=> {
      return of(new TodoActions.LoadItemsFail(errorRes.message))
    })
);

  @Effect({dispatch: false})
  doneItem = this.actions$.pipe(
    ofType(TodoActions.DONE_ITEM),
    switchMap((action: CustomAction) => {
      return this.http.post(
        '/api/done',
        {id: action.payload}
      )
    })
  );

  @Effect({dispatch: false})
  removeItem = this.actions$.pipe(
    ofType(TodoActions.REMOVE_ITEM),
    switchMap((action: CustomAction) => {
      return this.http.post(
        '/api/remove',
        {id: action.payload}
      )
    })
  );

  @Effect({dispatch: false})
  addItem = this.actions$.pipe(
    ofType(TodoActions.ADD_ITEM),
    switchMap((action: CustomAction) => {
      return this.http.post(
        '/api/add',
        {title: action.payload}
      )
    })
  );

  constructor(private actions$: Actions,
              private  http: HttpClient) {
  }
}
