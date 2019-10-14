import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName ='Server Aint Got No Name!';
  serverCreated =false;

  servers = [
    'test server 1', 'test server 2'
  ];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 3000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onClear() {
    this.serverName = '';
    this.serverCreated = false;
  }

  onUpdateServerName(event :Event) {
     console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;
  }
}
