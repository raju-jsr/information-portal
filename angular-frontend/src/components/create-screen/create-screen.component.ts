import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ApiCallService } from '../../services/api-call.service';
import { Bike } from '../../models/bike.model';
import { HomeScreenService } from '../../services/home-screen.service';

@Component({
  selector: 'app-create-screen',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule],
  templateUrl: './create-screen.component.html',
  styleUrl: './create-screen.component.css',
})
export class CreateScreenComponent {
  apiService = inject(ApiCallService);
  homeScreenService = inject(HomeScreenService);

  form = new FormGroup({
    bikeModel: new FormControl('', {
      validators: [Validators.required],
    }),
    parentCompany: new FormControl('', {
      validators: [Validators.required],
    }),
    launchYear: new FormControl('', {
      validators: [Validators.required],
    }),
    price: new FormControl('', {
      validators: [Validators.required],
    }),
    fuelType: new FormControl('', {
      validators: [Validators.required],
    }),
    bikeType: new FormControl('', {
      validators: [Validators.required],
    }),
    cubicCapacity: new FormControl('', {
      validators: [Validators.required],
    }),
    weight: new FormControl('', {
      validators: [Validators.required],
    }),
    torque: new FormControl('', {
      validators: [Validators.required],
    }),
    horsePower: new FormControl('', {
      validators: [Validators.required],
    }),
    mileage: new FormControl('', {
      validators: [Validators.required],
    }),
    gears: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  OnSubmit() {
    if (this.form.invalid) {
      console.log('INVALID FORM');
      return;
    }

    this.homeScreenService.updateScreenBusy(true);
    let bikeDetail: Bike = {
      bikeModel: this.form.value.bikeModel,
      parentCompany: this.form.value.parentCompany,
      launchYear: this.form.value.launchYear,
      price: this.form.value.price,
      fuelType: this.form.value.fuelType,
      bikeType: this.form.value.bikeType,
      cubicCapacity: this.form.value.cubicCapacity,
      weight: this.form.value.weight,
      torque: this.form.value.torque,
      horsePower: this.form.value.horsePower,
      mileage: this.form.value.mileage,
      gears: this.form.value.gears,
    };

    this.apiService.createBikeEntry(bikeDetail).subscribe({
      next: (response) => {
        this.homeScreenService.updateScreenBusy(false);
        console.log(response);
      },
      error: (error) => {
        this.homeScreenService.updateScreenBusy(false);
        console.log(error);
      },
      complete: () => {
        this.homeScreenService.updateScreenBusy(false);
      },
    });
  }
}
