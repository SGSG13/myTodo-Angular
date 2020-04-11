import { ActionReducerMap } from '@ngrx/store';
import * as fromTodoList from '../todo-list/store/todo.reducer';

export interface AppState {
  todo: fromTodoList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  todo: fromTodoList.todoReducer,
};
