import { Component, OnInit, OnDestroy } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Doctor } from 'src/data/doctor';
import { Observable, SubscriptionLike } from 'rxjs';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  public doctors: Doctor[] = []
  private doctorsSubscription: SubscriptionLike

  constructor(ui: UiService) {
    this,this.doctors = ui.doctors
    this.doctorsSubscription = ui
    .whenDoctorsUpdated()
    .subscribe(doctors => this.doctors = doctors)
 }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this,this.doctorsSubscription.unsubscribe
  }


}
