import {Component, OnInit} from '@angular/core';
import {ServerService} from "./server.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServerService]
})
export class ServersComponent implements OnInit {

  servers: { name: string, id: number, status: boolean }[] = [];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {
    this.servers = this.serverService.servers;
  }

}
