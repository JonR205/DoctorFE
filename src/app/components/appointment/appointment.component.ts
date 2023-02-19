import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Appointment } from 'src/data/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class appointmentComponent implements OnInit{
  @Input() appointment: Appointment | null = null
  private ui:UiService

  constructor(ui: UiService) { 
    this.ui = ui
  }

  ngOnInit(): void {

  }



  onDelete(): void {
    if (this.appointment === null) {
      console.log('no appointment')
    } else {
        this.ui.deleteAppointmentbyId(this.appointment.id)
      }
      
    }
    
  }

    

  
