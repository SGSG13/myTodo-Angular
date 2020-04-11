import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as TodoActions from '../store/todo.actions';
import {Todo} from "../../shared/interfaces";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;

  constructor( private store: Store<fromApp.AppState> ) { }

  ngOnInit(): void {
  }

  handleDoneTodo(id: string) {
    if(this.item.done) return;
    this.store.dispatch(new TodoActions.DoneItem(id))
  }

  handleRemoveTodo(id: string) {
    this.store.dispatch(new TodoActions.RemoveItem(id))
  }

}
