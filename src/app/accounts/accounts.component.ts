import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../account";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  @Input() anAccount: Account;

  constructor() {
  }

  ngOnInit() {
  }

  onChangedServerStatus(value: boolean) {
    this.anAccount.status = value;
  }
}
