import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './home/home.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: ServersComponent, path: 'servers'},
  {component: UsersComponent, path: 'users'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
