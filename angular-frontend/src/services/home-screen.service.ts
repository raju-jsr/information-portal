import { Injectable, signal } from '@angular/core';

@Injectable()
export class HomeScreenService {
  ishomeScreenOnline = signal(true);

  constructor() {}

  updateScreenStatus(status: boolean) {
    this.ishomeScreenOnline.set(status);
  }
}
