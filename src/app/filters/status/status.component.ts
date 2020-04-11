import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoFilterService } from "../../services/todo-filter.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatusComponent implements OnInit {

  buttons = [
    {label: 'All', name: 'all'},
    {label: 'Done', name: 'done'},
    {label: 'Active', name: 'active'},
  ];
  activeStatus = 'all';

  constructor(private todoFilterService: TodoFilterService) {}

  ngOnInit(): void {
  }

  handleChangeStatus(status: string) {
    this.activeStatus = status;
    this.todoFilterService.emitData({
      value: status,
      filterName: 'status'
    })
  }
}
