import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoFilterService } from "../../services/todo-filter.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  constructor(private todoFilterService: TodoFilterService) { }

  ngOnInit(): void {
  }

  handleChange(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.todoFilterService.emitData( {
      value,
      filterName: 'search'
    })
  }

}
