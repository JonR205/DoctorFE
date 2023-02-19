import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { appointmentComponent } from './components/appointment/appointment.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsComponent } from './components/patients/patients.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterDoctorComponent } from './components/register-doctor/register-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorsComponent,
    appointmentComponent,
    AppointmentsComponent,
    EditAppointmentComponent,
    DashboardComponent,
    PatientComponent,
    PatientsComponent,
    EditDoctorComponent,
    LoginComponent,
    RegisterDoctorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
