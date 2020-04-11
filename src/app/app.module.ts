import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchComponent } from './filters/search/search.component';
import { StatusComponent } from './filters/status/status.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { TodoEffects } from './todo-list/store/todo.effects';
import { appReducer } from './store/app.reducer';
import { LoaderComponent } from './todo-list/loader/loader.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './todo-list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchComponent,
    StatusComponent,
    TodoListComponent,
    TodoItemComponent,
    AddItemFormComponent,
    LoaderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
