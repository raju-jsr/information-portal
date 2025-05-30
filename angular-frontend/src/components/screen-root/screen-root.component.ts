import { Component, Input } from '@angular/core';
import { MotorbikeRootComponent } from '../motorbike-root/motorbike-root.component';

@Component({
  selector: 'app-screen-root',
  standalone: true,
  templateUrl: './screen-root.component.html',
  styleUrl: './screen-root.component.css',
  imports: [MotorbikeRootComponent],
})
export class ScreenRootComponent {
  @Input() screenMode: string = '';


}
