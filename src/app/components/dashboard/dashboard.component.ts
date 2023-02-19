import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Doctor } from 'src/data/doctor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(ui: UiService) {
  }
}
