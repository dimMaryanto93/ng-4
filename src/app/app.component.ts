import {Component} from '@angular/core';
import {Account} from "./account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts: Account[] = [
    new Account('Master Account', false),
    new Account('Test Account', true)
  ];


  doCreatedAnAccount(anAccount: Account) {
    this.accounts.push(anAccount);
  }
}
