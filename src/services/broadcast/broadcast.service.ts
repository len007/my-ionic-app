import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  public myData = new Subject<object>();
  public receive = this.myData.asObservable();
  constructor() { }
  send(obj: object) {
    this.myData.next(obj);
  }
}
