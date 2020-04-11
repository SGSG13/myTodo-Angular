import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as TodoActions from '../todo-list/store/todo.actions';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  constructor( private store: Store<fromApp.AppState> ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    this.store.dispatch(new TodoActions.AddItem(title));
    form.reset();
  }

}
