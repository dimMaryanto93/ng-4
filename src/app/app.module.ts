import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AccountsComponent} from './accounts/accounts.component';
import {AnAccountComponent} from './an-account/an-account.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
