import { Component } from "@angular/core";

// Add "Decorator". Delcares it is not a normal class, but a Component Class
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = "Offline";

    getServerStatus() {
        return this.serverStatus;
    }
}