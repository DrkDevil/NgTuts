import { Component } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    p {
      padding:5px;
    }
  `]
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';
  
  constructor() {
    // Give a random number between 0 and 1
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    // If server status is equal to online  use green if not use red
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
