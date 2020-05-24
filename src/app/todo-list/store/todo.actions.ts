import { Action } from '@ngrx/store';
import { Todo } from "../../shared/interfaces";

export const LOAD_ITEMS_REQUEST = '[Todo] Load Items Request';
export const LOAD_ITEMS_SUCCESS = '[Todo] Load Items Success';
export const RESPONSE_FAIL = '[Todo] Response fail';
export const REMOVE_ITEM = '[Todo] Remove Item';
export const DONE_ITEM = '[Todo] Done Item';
export const ADD_ITEM = '[Todo] Add Item';


export class LoadItemsRequest implements Action {
  readonly type = LOAD_ITEMS_REQUEST;
}

export class LoadItemsSuccess implements Action {
  readonly type = LOAD_ITEMS_SUCCESS;
  public payload: Todo[];

  constructor(items: Todo[]) {
    this.payload = items;
  }
}

export class ResponseFail implements Action {
  readonly type = RESPONSE_FAIL;
  public error: string;

  constructor(error: string) {
    this.error = error;
  }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  public payload: string;

  constructor(id: string) {
    this.payload = id;
  }
}

export class DoneItem implements Action {
  readonly type = DONE_ITEM;
  public payload: string;

  constructor(id: string) {
    this.payload = id;
  }
}

export class AddItem implements Action {
  readonly type = ADD_ITEM;
  public payload: string;

  constructor(title: string) {
    this.payload = title;
  }
}

export type TodoActionsType =
  | LoadItemsRequest
  | LoadItemsSuccess
  | ResponseFail
  | RemoveItem
  | DoneItem
  | AddItem;
