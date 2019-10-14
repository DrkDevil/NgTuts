import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayData = false;
  clicks = [];

  onDisplay() {
    this.displayData = !this.displayData;
    // this.clicks.push(this.clicks.length + 1);
    this.clicks.push(new Date());
  }

}
