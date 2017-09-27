import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class ServerService {

  private baseUrl: string = "https://belajar-ng-http.firebaseio.com/";

  constructor(private http: Http) {
  }

  storeServer(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post(this.baseUrl + 'servers.json',
      servers,
      {headers: headers})
  }

  gettingServers() {
    return this.http.get('https://belajar-ng-http.firebaseio.com/servers.json');
  }

}
