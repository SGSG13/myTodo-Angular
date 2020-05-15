import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as TodoActions from '../todo-list/store/todo.actions';

import {TodoResponseData} from "../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoSocketService {

  socket;

  constructor(private store: Store<fromApp.AppState>) {}

  initSocket() {
    this.socket = io('http://localhost:3001');
    this.socket.on('changeTodo', (data: TodoResponseData) => {
      this.store.dispatch(new TodoActions.LoadItemsSuccess(data.items))
      }
    )
  }

  closeSocket() {
    this.socket.disconnect()
  }
}

