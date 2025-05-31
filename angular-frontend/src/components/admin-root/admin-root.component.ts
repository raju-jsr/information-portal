import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CreateScreenComponent } from '../create-screen/create-screen.component';

@Component({
  selector: 'app-admin-root',
  standalone: true,
  imports: [MatIconModule, CreateScreenComponent],
  templateUrl: './admin-root.component.html',
  styleUrl: './admin-root.component.css',
})
export class AdminRootComponent {
  screenMode: string = 'DEFAULT';

  menuItemClicked(val: string) {
    this.screenMode = val;
  }
}
