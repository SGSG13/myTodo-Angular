import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoSocketService} from "./services/todo-socket.service.";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private todoSocketService: TodoSocketService) {
  }

  ngOnInit() {
    this.todoSocketService.initSocket()
  }

  ngOnDestroy() {
    this.todoSocketService.closeSocket()
  }
}
