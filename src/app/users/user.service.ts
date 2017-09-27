import {Injectable} from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {

  users: User[] = [];

  constructor() {
    this.users.push({username: 'dimMaryanto93', password: 'dimas1234', active: true, fullname: 'Dimas Maryanto'});
    this.users.push({username: 'ahmad_lery', password: 'lery1234', active: true, fullname: 'Ahmad Lery'});
    this.users.push({username: 'rega', password: 'rega1234', active: false, fullname: 'Rega'});
  }

}
