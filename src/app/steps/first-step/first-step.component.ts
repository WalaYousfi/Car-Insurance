import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.scss',
})
export class FirstStepComponent {
  tasjils = [
    { value: 'Série Normale  (TU) تو    ن ت', span: 'TUN تونس' },
    { value: 'Régime Suspensif (RS) ' },
    { value: '    Moto (MOTO) د ن' },
    { value: '    Tracteur (TRAC) ج ف' },
    { value: '    Chef de Mission Diplomatique (CMD) ر ب د' },
    { value: ' Corps Diplomatique (CD) س د' },
    { value: '  Mission Diplomatique (MD) ب د' },
    { value: '   Mission Consulaire (MC)ث  ق' },
    { value: 'Corps Consulaire (CC) س ق' },
    { value: 'Immatriculation Etrangère ou Douanière' },
  ];
  form = this.fb.group({
    firstCtrl: ['', Validators.required],

    confirmCtrl: ['', Validators.required],

    matriculation: ['', Validators.required],
  });
  selectedTasjil: any = null;
  constructor(private fb: FormBuilder) {}

  onMatriculationChange(value: string) {
    this.selectedTasjil = this.tasjils.find((t) => t.value === value);
  }
}
