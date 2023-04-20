import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus= 'Server not created';
  serverName='Default name';
  username = "";
  allowButtonClick = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created. Server name: ' + this.serverName;
  }

  onUpdateServerName(e: Event) {
    this.serverName= (<HTMLInputElement>e.target).value;
  }

  
  checkAllowButtonClick() {
    if (this.username != "") {
      this.allowButtonClick = true;
    }
  }

  resetUsername() {
    this.username = "";
    this.allowButtonClick = false;
  }
}
