import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Appointment } from 'src/data/appointment';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent {
  public appointment: Appointment = new Appointment(-1, '', '', '', '', '')
  private ui: UiService
  
  constructor(ui: UiService) { 
    this.ui = ui
  }

  ngOnInit(): void {

  }

  updateID(id:number): void {
    this.appointment.id = id
  }
  updateday(day:string): void {
    this.appointment.day = day
  }
  updateTimeHour(timeHour:string): void {
    this.appointment.timeHour = timeHour
  }
  updateTimeMinute(timeMinutes:string): void {
    this.appointment.timeMinutes = timeMinutes
  }
  updateDoctor(doctor:string): void {
    this.appointment.doctor = doctor
  }
  updatePatient(patient:string): void {
    this.appointment.patient = patient
  }
  onApply(): void {
    this.ui.addAppointment(
      {
        ...this.appointment,
        id: Math.random() 
      }
      )
    
  }
  onCancel(): void {
    console.log('cancel');
    
  }

}
