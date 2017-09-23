import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: { id: number, name: string }[] = [
    {id: 1, name: 'Production Server'},
    {id: 2, name: 'Testing Server'},
    {id: 3, name: 'Development Server'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
