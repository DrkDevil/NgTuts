import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
// {type: 'server', name: 'serverName', content: 'just a description'}
export class AppComponent {
  serverElements = [{type: 'server', name: 'serverName', content: 'just a description'}];
// Get Server Data JS objt
onServerAdded(serverData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
  });
}

}