import {Component, OnInit} from '@angular/core';
import {ServerService} from "./server.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServerService]
})
export class ServersComponent implements OnInit {

  servers: { name: string, id: number, status: boolean }[] = [];

  constructor(private serverService: ServerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.servers = this.serverService.servers;
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route})
  }
}
