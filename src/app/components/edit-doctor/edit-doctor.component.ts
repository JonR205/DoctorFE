import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Doctor } from 'src/data/doctor';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css'],
})
export class EditDoctorComponent {
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
