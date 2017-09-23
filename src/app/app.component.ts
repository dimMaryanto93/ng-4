import {Component, OnInit} from '@angular/core';
import {Account} from "./account";
import {AccountService} from "./account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  doCreatedAnAccount(anAccount: Account) {
    this.accountService.newAccount(anAccount);
  }
}
