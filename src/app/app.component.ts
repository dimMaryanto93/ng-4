import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.servers.push({
      name: 'Production Server', scale: 'medium', startedDate: new Date()
    });

    this.servers.push({
      name: 'Development Server', scale: 'low', startedDate: new Date()
    })
  }

  servers: { name: string, scale: string, startedDate: Date }[] = [];
}
