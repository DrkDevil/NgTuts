import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];

  onAddServer() {
    this.servers.push('Another Well');
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    // splice to remove item from position
    this.servers.splice(position, 1);
  }
}
