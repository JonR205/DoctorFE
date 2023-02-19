import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { Doctor } from 'src/data/doctor';

@Component({
  selector: 'app-register',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css'],
})
export class RegisterDoctorComponent {
  public doctor: Doctor = new Doctor(-1, '', '', '');
  private ui: UiService;
  

  constructor(ui: UiService) {
    this.ui = ui;
    
  }

  ngOnInit(): void {}
  updatename(name: string): void {
    this.doctor.name = name;
  }
  updateEmail(email: string): void {
    this.doctor.email = email;
  }
  updatePassword(password: string): void {
    this.doctor.password = password;
  }
  onApply(): void {
    this.ui.addDoctor({
      ...this.doctor,
      id: Math.random(),
    });
  }

  onCancel(): void {
    console.log('cancel');
  }
}
