import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/data/patient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
@Input() patient: Patient | null = null
constructor() { 
}

ngOnInit(): void {

}







}
