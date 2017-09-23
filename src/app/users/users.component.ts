import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: { name: string, email: string, active: boolean }[] = [
    {name: 'dimMaryanot93', email: 'engineer.dimmaryanto93@outlook.com', active: true},
    {name: 'lery1993', email: 'lary@gmail.com', active: false}
  ];

  user: { name: string, email: string, active: boolean } = {name: '', active: false, email: null};

  constructor() {
  }

  ngOnInit() {
  }

}
