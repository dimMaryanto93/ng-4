import {Injectable} from '@angular/core';
import {Server} from "./server";

@Injectable()
export class ServerService {

  servers: Server[] = [];

  constructor() {
    this.servers.push({id: 1, name: 'Production Server', status: false, capacity: 100});
    this.servers.push({id: 2, name: 'Testing Server', status: true, capacity: 50});
    this.servers.push({id: 3, name: 'Development Server', status: false, capacity: 10});
  }

}
