import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiCallService } from '../../services/api-call.service';
import { MatIconModule } from '@angular/material/icon';
import { HomeScreenService } from '../../services/home-screen.service';

@Component({
  selector: 'app-motorbike-root',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './motorbike-root.component.html',
  styleUrl: './motorbike-root.component.css',
})
export class MotorbikeRootComponent implements OnInit {
  apiCallService = inject(ApiCallService);
  homeScreenService = inject(HomeScreenService);

  bikeList: any;
  bikeColumnMapping = {
    BIKE_MODEL: 'Model',
    PARENT_COMPANY: 'Company',
    LAUNCH_YEAR: 'Launched',
    EX_SHOWROOM_PRICE: 'Price',
    FUEL_TYPE: 'Fuel Type',
    BIKE_TYPE: 'Bike Type',
    ICON: 'Icon',
  };

  bikeColumnMappingArray = Object.keys(this.bikeColumnMapping);

  ngOnInit() {
    this.homeScreenService.updateScreenBusy(true);
    this.apiCallService.getBikeDetails().subscribe({
      next: (response) => {
        this.homeScreenService.updateScreenBusy(false);
        this.bikeList = response;
      },
      error: (error) => {
        console.log(error);
        this.homeScreenService.updateScreenBusy(false);
      },
      complete: () => {
        this.homeScreenService.updateScreenBusy(false);
      },
    });
  }

  recordClicked(val: any) {
    console.log(val);
  }
}
