import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  values: { id: string, name: number }[] = [];

  localhost: string = 'jdbc:postgresql://localhost:5432/bootcamp_2';
}
