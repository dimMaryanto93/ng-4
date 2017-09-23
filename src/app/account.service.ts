import {Injectable} from '@angular/core';
import {Account} from "./account";

@Injectable()
export class AccountService {

  constructor() {
  }

  accounts: Account[] = [
    new Account('Master Account', false),
    new Account('Test Account', true)
  ];

  newAccount(anAccount: Account) {
    this.accounts.push(anAccount);
  }

}
