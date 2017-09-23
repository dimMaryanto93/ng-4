import {Injectable} from '@angular/core';
import {Account} from "./account";
import {LoggingService} from "./logging.service";

@Injectable()
export class AccountService {

  constructor(private loggingService: LoggingService) {
  }

  accounts: Account[] = [
    new Account('Master Account', false),
    new Account('Test Account', true)
  ];

  newAccount(anAccount: Account) {
    this.accounts.push(anAccount);
    this.loggingService.logListChanged(this.accounts.length);
  }

}
