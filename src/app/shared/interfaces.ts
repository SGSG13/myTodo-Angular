import {Action} from "@ngrx/store";

export interface Todo {
  id: string
  title: string
  done: boolean
}

export interface TodoItemFromServer {
  title: string;
  _id: string;
  done: boolean;
  __v: number;
}

export interface TodoResponseData {
  items: TodoItemFromServer[];
}

export interface CustomAction extends Action {
  type: string;
  payload?: any;
  error?: string;
}
