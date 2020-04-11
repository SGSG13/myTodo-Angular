import { Observable, Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoFilterService {
  private subject = new Subject<any>();

  emitData(data: any) {
    this.subject.next(data)
  }

  getData():Observable<any> {
    return this.subject;
  }
}
