import { Component } from '@angular/core';
import { Doctor } from 'src/data/doctor';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doctorFE';


  constructor(public ui: UiService) {
  }
}
