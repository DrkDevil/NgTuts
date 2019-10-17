import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  newServerContent = '';
  constructor() { }
  // Make properties events (<> = generic type)  () to call constructor of emitter
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // Using a alias
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  ngOnInit() {
  }

  // Using Local Reference
  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput.value);
    // use sever created and emit method
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    });
  }
}
