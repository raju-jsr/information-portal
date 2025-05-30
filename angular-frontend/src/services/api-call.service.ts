import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private http = inject(HttpClient);
  basePath: string = 'http://localhost:4100';
  constructor() {}

  getBikeDetails() {
    return this.http.get(this.basePath + '/portal/bike/details');
  }
}
