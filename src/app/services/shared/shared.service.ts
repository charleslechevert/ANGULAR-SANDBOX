import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  filters: string = '';
  private filterValueSubject = new Subject<string>();
  constructor() {}

  addFilter(data: any) {
    this.filters = data;
  }

  /*removeFilter(index: number) {
    this.filters.splice(index, 1);
  }*/

  setFilter(filter: any) {
    this.filters = filter;
    this.filterValueSubject.next(filter);
  }

  getFilter() {
    return this.filters;
  }

  getFilterValueSubject(): Subject<string> {
    return this.filterValueSubject;
  }
}
