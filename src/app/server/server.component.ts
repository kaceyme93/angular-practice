import { Component } from "@angular/core";

// Add "Decorator". Delcares it is not a normal class, but a Component Class
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color: white;
    }`]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "Offline";

    constructor() {
        this.serverStatus = Math.random() > .5? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}