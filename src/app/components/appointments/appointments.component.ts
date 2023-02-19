import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, SubscriptionLike } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Appointment } from 'src/data/appointment';
import { Doctor } from 'src/data/doctor';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent {
  public appointments: Appointment[];
  private appointmentsSubscription: SubscriptionLike;

  constructor(ui: UiService) {
    this, (this.appointments = ui.appointments);

    this.appointmentsSubscription = ui
      .whenAppointmentsUpdated()
      .subscribe((appointments) => (this.appointments = appointments));
  }

  //  checkForDoctor(this.loggedInDoctor) {

  //  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this, this.appointmentsSubscription.unsubscribe;
  }
}
