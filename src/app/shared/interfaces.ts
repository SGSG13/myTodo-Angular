import {Action} from "@ngrx/store";

export interface Todo {
  id: string
  title: string
  done: boolean
}

export interface TodoResponseData {
  items: Todo[];
}

export interface CustomAction extends Action {
  type: string;
  payload?: any;
  error?: string;
}
