import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Account} from "../account";
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-an-account',
  templateUrl: './an-account.component.html',
  styleUrls: ['./an-account.component.css'],
  providers: [LoggingService]
})
export class AnAccountComponent implements OnInit {

  @Output('createdAnAccount') accountCreated = new EventEmitter<Account>();
  account: Account = new Account();

  constructor(private loggingService: LoggingService) {
  }

  ngOnInit() {
  }

  createNewAccount() {
    this.loggingService.logServerStatus(this.account);
    this.accountCreated.emit(this.account);
    this.account = new Account();
  }
}
