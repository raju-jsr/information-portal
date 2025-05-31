import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-screen',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-screen.component.html',
  styleUrl: './create-screen.component.css',
})
export class CreateScreenComponent {
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
}
