import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as TodoActions from './store/todo.actions';
import { Todo } from '../shared/interfaces';
import { TodoFilterService } from "../services/todo-filter.service";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  items: Todo[] = [];
  isLoading = false;
  error = '';
  filters = {
    status: 'all',
    search: ''
  };

  private storeSub: Subscription;
  private tfsSub: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private todoFilterService: TodoFilterService) {
  }

  ngOnInit(): void {
    this.store.dispatch(new TodoActions.LoadItemsRequest());

    this.storeSub = this.store.select('todo').subscribe(todoState => {
        this.isLoading = todoState.loading;
        this.items = todoState.items;
        this.error = todoState.error;
      }
    );
    this.tfsSub = this.todoFilterService.getData().subscribe(data => {
      this.filters[data.filterName] = data.value;
    })
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
    this.tfsSub.unsubscribe();
  }
}
