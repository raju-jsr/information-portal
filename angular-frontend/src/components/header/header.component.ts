import { Component, inject } from '@angular/core';
import { HomeScreenService } from '../../services/home-screen.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  homeScreenService = inject(HomeScreenService);

  routeHome() {
    this.homeScreenService.updateScreenStatus(true);
  }

  routetoScreen(val: string) {
    this.homeScreenService.updateScreenStatus(false);
  }
}
