import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AccountsComponent} from './accounts/accounts.component';
import {AnAccountComponent} from './an-account/an-account.component';
import {LoggingService} from "./logging.service";

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AnAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
