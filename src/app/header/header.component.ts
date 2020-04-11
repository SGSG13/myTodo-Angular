import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/index';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{

  toDoCount = 0;
  doneCount = 0;

  private storeSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('todo').subscribe(todoState => {
        this.doneCount = todoState.items.filter((item) => item.done).length;
        this.toDoCount = todoState.items.length - this.doneCount;
      }
    )
  }

  ngOnDestroy(): void  {
    this.storeSub.unsubscribe();
  }
}
