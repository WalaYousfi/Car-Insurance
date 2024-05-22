import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrl: './second-step.component.scss',
})
export class SecondStepComponent {
  form = this.fb.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
