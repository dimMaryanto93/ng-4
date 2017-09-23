import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements: { name: string, content: string, type: string }[] = [
    {name: 'Test Server', content: 'Some content', type: 'blueprint'},
    {name: 'Production server', content: 'some content', type: 'server'},
    {name: 'Development server', content: 'some text', type: 'server'}
  ];

  addNewServer() {
    // this.serverElements.push({name: this.serverName, content: this.serverContent, type: 'server'});
  }

  addNewServerBlueprint() {
    // this.serverElements.push({name: this.serverName, content: this.serverContent, type: 'blueprint'});
  }
}
