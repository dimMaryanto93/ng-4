import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }

  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: null
    // }
    this.route.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params['id'],
          name: null
        }
      }
    );
  }

}
