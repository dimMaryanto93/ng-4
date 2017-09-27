import {Component, ElementRef, ViewChild} from '@angular/core';
import {ServerService} from "./server.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private serverService: ServerService) {
  }

  @ViewChild('serverTypeInput') serverInputType: ElementRef;
  @ViewChild('serverCapacityInput') serverInputCapacitiy: ElementRef;

  servers = [
    {name: 'Testing Server', capacity: 10, id: this.generateId()},
    {name: 'Production Server', capacity: 200, id: this.generateId()},
    {name: 'Development Server', capacity: 50, id: this.generateId()}
  ];

  saveServer() {
    this.serverService.storeServer(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.error(error));
  }

  getServers() {
    this.serverService.gettingServers().subscribe(
      (servers: any[]) => {
        this.servers = servers;
      },
      (error) => console.log(error)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 1000);
  }

  addServer() {
    this.servers.push({
      name: this.serverInputType.nativeElement.value,
      capacity: this.serverInputCapacitiy.nativeElement.value,
      id: this.generateId()
    })
  }
}
