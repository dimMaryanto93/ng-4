import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverName: string;
  serverContent: string;

  addNewServer() {
    // this.serverElements.push({name: this.serverName, content: this.serverContent, type: 'server'});
    this.serverName = null;
    this.serverContent = null;
  }

  addNewServerBlueprint() {
    // this.serverElements.push({name: this.serverName, content: this.serverContent, type: 'blueprint'});
    this.serverName = null;
    this.serverContent = null;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
