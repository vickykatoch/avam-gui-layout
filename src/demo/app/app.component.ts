import { Component } from '@angular/core';
import { AvamLayoutService } from 'avam-gui-layout';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meaning: number;
  constructor(layoutService: AvamLayoutService) {
    this.meaning = layoutService.getName();
    console.log(this.meaning);
  }
}
