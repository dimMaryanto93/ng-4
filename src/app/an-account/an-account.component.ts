import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-an-account',
  templateUrl: './an-account.component.html',
  styleUrls: ['./an-account.component.css']
})
export class AnAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{ name: string, status: boolean }>();

  constructor() {
  }

  ngOnInit() {
  }

}
