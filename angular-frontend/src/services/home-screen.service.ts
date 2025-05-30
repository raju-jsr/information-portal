import { Injectable, signal } from '@angular/core';

@Injectable()
export class HomeScreenService {
  ishomeScreenOnline = signal(true);
  screenMode = signal('');

  constructor() {}

  updateScreenStatus(status: boolean) {
    this.ishomeScreenOnline.set(status);
  }

  updateScreenMode(mode: string) {
    this.screenMode.set(mode);
  }
}
