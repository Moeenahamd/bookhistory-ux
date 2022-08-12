import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private homeUrl$ = new BehaviorSubject<boolean>(false);
  home = this.homeUrl$.asObservable();
  constructor() { }
  setHome(data:any):void {
    this.homeUrl$.next(data);
  }
}
