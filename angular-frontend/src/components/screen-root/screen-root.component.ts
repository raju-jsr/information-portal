import { Component, Input } from '@angular/core';
import { MotorbikeRootComponent } from '../motorbike-root/motorbike-root.component';
import { AdminRootComponent } from '../admin-root/admin-root.component';

@Component({
  selector: 'app-screen-root',
  standalone: true,
  templateUrl: './screen-root.component.html',
  styleUrl: './screen-root.component.css',
  imports: [MotorbikeRootComponent, AdminRootComponent],
})
export class ScreenRootComponent {
  @Input() screenMode: string = '';


}
