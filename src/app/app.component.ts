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

  addNewServer(dataServer: { nama: string, content: string }) {
    this.serverElements.push({name: dataServer.nama, content: dataServer.content, type: 'server'});
  }

  addNewServerBlueprint(dataBlueprint: { nama: string, content: string }) {
    this.serverElements.push({name: dataBlueprint.nama, content: dataBlueprint.content, type: 'blueprint'});
  }
}
