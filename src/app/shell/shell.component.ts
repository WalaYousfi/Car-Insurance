import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class ShellComponent {  
  tasjils =[
    {value: 'Série Normale  (TU) تو    ن ت'},
    {value: 'Régime Suspensif (RS) '},
    {value: '    Moto (MOTO) د ن'},
    {value: '    Tracteur (TRAC) ج ف'},
    {value: '    Chef de Mission Diplomatique (CMD) ر ب د'},
    {value: ' Corps Diplomatique (CD) س د'},
    {value: '  Mission Diplomatique (MD) ب د'},
    {value: '   Mission Consulaire (MC)ث  ق'},
    {value: 'Corps Consulaire (CC) س ق'},
  ]
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    
  confirmCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}


}
