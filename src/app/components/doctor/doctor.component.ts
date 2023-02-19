import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/data/doctor';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit{
  @Input() doctor: Doctor | null = null
  private ui:UiService

  constructor(ui: UiService) { 
    this.ui = ui
  }

  ngOnInit(): void {

  }

onDelete(): void {
    if (this.doctor === null) {
      console.log('no doctor')
    } else {
        this.ui.deleteDoctorbyId(this.doctor.id)
      }
      
    }
    

  }



