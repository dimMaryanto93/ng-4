import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {name: 'Testing Server', capacity: 10, id: this.generateId()},
    {name: 'Production Server', capacity: 200, id: this.generateId()},
    {name: 'Development Server', capacity: 50, id: this.generateId()}
  ];

  private generateId() {
    return Math.round(Math.random() * 1000);
  }
}
