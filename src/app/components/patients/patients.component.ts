import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/data/patient';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  public patients: Patient[] = []
  constructor() { 
  }

  ngOnInit(): void {

  }

}
