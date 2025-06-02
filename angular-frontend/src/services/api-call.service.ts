import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { forkJoin } from 'rxjs';

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

  createBikeEntry(bikeDetails: Bike) {
    let bikeEntryPayload: any = {};
    let bikeSpecsPayload: any = {};

    bikeEntryPayload['BIKE_MODEL'] = bikeDetails.bikeModel;
    bikeEntryPayload['PARENT_COMPANY'] = bikeDetails.parentCompany;
    bikeEntryPayload['LAUNCH_YEAR'] = bikeDetails.launchYear;
    bikeEntryPayload['EX_SHOWROOM_PRICE'] = bikeDetails.price;
    bikeEntryPayload['FUEL_TYPE'] = bikeDetails.fuelType;
    bikeEntryPayload['BIKE_TYPE'] = bikeDetails.bikeType;

    bikeSpecsPayload['BIKE_MODEL'] = bikeDetails.bikeModel;
    bikeSpecsPayload['CUBIC_CAPACITY'] = bikeDetails.cubicCapacity;
    bikeSpecsPayload['WEIGHT'] = bikeDetails.weight;
    bikeSpecsPayload['TORQUE'] = bikeDetails.torque;
    bikeSpecsPayload['HORSEPOWER'] = bikeDetails.horsePower;
    bikeSpecsPayload['MILEAGE'] = bikeDetails.mileage;
    bikeSpecsPayload['GEARS'] = bikeDetails.gears;

    let bikeEntryAPI = this.http.post(
      this.basePath + '/portal/bike/details',
      bikeEntryPayload
    );

    let bikeSpecAPI = this.http.post(
      this.basePath + '/portal/bike/specs',
      bikeSpecsPayload
    );

    return forkJoin(bikeEntryAPI, bikeSpecAPI);
  }
}
