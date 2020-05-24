import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError} from 'rxjs/operators';
import {EMPTY, of} from "rxjs";

import * as TodoActions from './todo.actions';
import {CustomAction, TodoResponseData} from "../../shared/interfaces";


@Injectable()
export class TodoEffects {
    @Effect()
    loadItems = this.actions$.pipe(
        ofType(TodoActions.LOAD_ITEMS_REQUEST),
        switchMap(() => {
            return this.http.get<TodoResponseData>('/api/todos');
        }),
        map(res => new TodoActions.LoadItemsSuccess(res.items)),
        catchError(errorRes => of(new TodoActions.ResponseFail(errorRes.error.error.message)))
    );

    @Effect()
    doneItem = this.actions$.pipe(
        ofType(TodoActions.DONE_ITEM),
        switchMap((action: CustomAction) => {
            return this.http.put(
                `/api/todo/${action.payload}`,
                {}
            );
        }),
        switchMap(_ => EMPTY),
        catchError(errorRes => of(new TodoActions.ResponseFail(errorRes.error.error.message)))
    );

    @Effect()
    removeItem = this.actions$.pipe(
        ofType(TodoActions.REMOVE_ITEM),
        switchMap((action: CustomAction) => {
            return this.http.delete(`/api/todo/${action.payload}`,)
        }),
        switchMap(_ => EMPTY),
        catchError(errorRes => of(new TodoActions.ResponseFail(errorRes.error.error.message)))
    );

    @Effect()
    addItem = this.actions$.pipe(
        ofType(TodoActions.ADD_ITEM),
        switchMap((action: CustomAction) => {
            return this.http.post(
                '/api/todo',
                {title: action.payload}
            )
        }),
        switchMap(_ => EMPTY),
        catchError(errorRes => of(new TodoActions.ResponseFail(errorRes.error.error.message)))
    );

    constructor(private actions$: Actions,
                private  http: HttpClient) {
    }
}
