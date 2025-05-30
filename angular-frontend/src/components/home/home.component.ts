import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeScreenService } from '../../services/home-screen.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [HeaderComponent],
  providers: [HomeScreenService],
})
export class HomeComponent implements OnInit{
  private homeScreenService = inject(HomeScreenService);


  ishomeScreenOnline = this.homeScreenService.ishomeScreenOnline;

  ngOnInit() {

  }
}
