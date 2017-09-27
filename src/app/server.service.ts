import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ServerService {

  private baseUrl: string = "https://belajar-ng-http.firebaseio.com/";

  constructor(private http: Http) {
  }

  storeServer(servers: any[]) {
    return this.http.post(this.baseUrl + 'servers.json', servers)
  }

}
