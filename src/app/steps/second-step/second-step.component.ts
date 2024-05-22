import { Component } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
})
export class SecondStepComponent {
  otp!: string;

  otpConfig = {
    length: 6,
    inputStyles: {
      'width': '40px',
      'height': '40px',
      'margin': '0 5px',
      'font-size': '20px',
      'border-radius': '5px',
      'border': '1px solid #ccc',
      'text-align': 'center'
    },
    containerStyles: {
      'display': 'flex',
      'justify-content': 'center',
      'margin': '20px 0'
    },
    allowNumbersOnly: true,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '-',
    letterCase: 'Upper' as 'Upper' | 'Lower' | undefined
  };

  onOtpChange(otp: string) {
    this.otp = otp;
    console.log('OTP Value:', this.otp);
  }
}
