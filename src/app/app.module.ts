import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from "./users/user/user.component";
import {ServerEditComponent} from "./servers/server-edit/server-edit.component";

const appRoutes: Routes = [
  {component: HomeComponent, path: ''},
  {component: ServersComponent, path: 'servers'},
  {component: ServerEditComponent, path: 'servers/:id/edit'},
  {component: UsersComponent, path: 'users'},
  {component: UserComponent, path: 'users/:id'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ServerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
