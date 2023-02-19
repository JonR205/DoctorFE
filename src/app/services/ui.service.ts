import { Injectable } from '@angular/core';
import { Appointment } from 'src/data/appointment';
import { Doctor } from 'src/data/doctor';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, take } from 'rxjs';
import { Patient } from 'src/data/patient';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public appointments: Appointment[] = [];
  public doctors: Doctor[] = [];
  private appointmentsSubject: Subject<Appointment[]> = new Subject();
  private doctorsSubject: Subject<Doctor[]> = new Subject();
  private http: HttpClient;
  private router: Router;
  private userId: number | undefined;
  private username: string | undefined;
  private loading = false;
  private showLogin = true;

  constructor(http: HttpClient, router: Router, loggedInUser: Doctor) {
    this.http = http;
    this.updateAppointments();
    this.updateDoctors();
    this.router = router;
  }

  public getShowLogin(): boolean {
    return this.showLogin;
  }

  updateAppointments(): void {
    this.http
      .get<Appointment[]>('http://localhost:3000/appointments')
      .pipe(take(1))
      .subscribe((appointments) => {
        this.appointments = appointments;
        this.appointmentsSubject.next(this.appointments);
      });
  }

  updateDoctors(): void {
    this.http
      .get<Doctor[]>('http://localhost:3000/doctors')
      .pipe(take(1))
      .subscribe((doctors) => {
        this.doctors = doctors;
        this.doctorsSubject.next(this.doctors);
      });
  }

  deleteAppointmentbyId(id: number): void {
    this.http
      .delete(`http://localhost:3000/appointments/${id}`)
      .pipe(take(1))
      .subscribe(() => this.updateAppointments());
  }

  deleteDoctorbyId(id: number): void {
    this.http
      .delete(`http://localhost:3000/doctors/${id}`)
      .pipe(take(1))
      .subscribe(() => this.updateDoctors());
  }

  addAppointment(appointment: Appointment): void {
    this.http
      .post('http://localhost:3000/appointments', appointment)
      .pipe(take(1))
      .subscribe(() => this.updateAppointments());
  }

  addDoctor(doctor: Doctor): void {
    this.http
      .post('http://localhost:3000/doctors', doctor)
      .pipe(take(1))
      .subscribe(() => this.updateDoctors());
    this.router.navigate(['doctors']);
  }

  whenAppointmentsUpdated(): Observable<Appointment[]> {
    return this.appointmentsSubject.asObservable();
  }

  whenDoctorsUpdated(): Observable<Doctor[]> {
    return this.doctorsSubject.asObservable();
  }
}
