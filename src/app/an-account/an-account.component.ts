import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Account} from "../account";

@Component({
  selector: 'app-an-account',
  templateUrl: './an-account.component.html',
  styleUrls: ['./an-account.component.css']
})
export class AnAccountComponent implements OnInit {

  @Output('createdAnAccount') accountCreated = new EventEmitter<Account>();
  account: Account = new Account();

  constructor() {
  }

  ngOnInit() {
  }

  createNewAccount() {
    this.accountCreated.emit(this.account);
    this.account = new Account();
  }
}
