import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-last-step',
  templateUrl: './last-step.component.html',
  styleUrl: './last-step.component.scss'
})
export class LastStepComponent {
@Input() stepper!: MatStepper;
}
