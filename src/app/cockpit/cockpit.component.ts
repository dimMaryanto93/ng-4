import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @ViewChild('serverName') serverName: ElementRef;
  @Output() serverCreated = new EventEmitter<{ nama: string, content: string }>();
  @Output('serverBlueprintCreated') blueprintCreated = new EventEmitter<{ nama: string, content: string }>();

  // serverName: string;
  serverContent: string;

  addNewServer() {
    // this.serverElements.push({name: this.nama, content: this.content, type: 'server'});
    this.serverCreated.emit({nama: this.serverName.nativeElement.value, content: this.serverContent});
    this.serverName = null;
    this.serverContent = null;
  }

  addNewServerBlueprint() {
    // this.serverElements.push({name: this.nama, content: this.content, type: 'blueprint'});
    this.blueprintCreated.emit({nama: this.serverName.nativeElement.value, content: this.serverContent});
    this.serverName = null;
    this.serverContent = null;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
