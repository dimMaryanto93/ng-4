import {Component, OnInit} from '@angular/core';
import {version} from "punycode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = `Welcome to Server Manager ${version}`;
  content = 'Manage your Servers and Users';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLoadServers() {
    this.router.navigate(['/servers']);
  }

}
