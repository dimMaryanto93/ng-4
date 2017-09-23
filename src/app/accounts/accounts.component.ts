import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../account";
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [LoggingService]
})
export class AccountsComponent implements OnInit {

  @Input() anAccount: Account;

  constructor(private serviceLogging: LoggingService) {
  }

  ngOnInit() {
  }

  onChangedServerStatus(value: boolean) {
    this.anAccount.status = value;
    this.serviceLogging.logChangedServerStatus(this.anAccount);
  }
}
