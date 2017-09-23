import {Injectable} from '@angular/core';
import {Account} from "./account";

@Injectable()
export class LoggingService {

  constructor() {
  }

  logServerStatus(anAccount: Account) {
    console.log("A new server created! the name is " + anAccount.name + " and the status is " + anAccount.status);
  }

  logChangedServerStatus(anAccount: Account) {
    console.log("A server updated! the name is " + anAccount.name + " and the status is " + anAccount.status);
  }

  logListChanged(size: number) {
    console.log("List values account changed the size : " + size);
  }

}
