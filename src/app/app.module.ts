import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { HttpUtilService } from './http-util.service';
import { ErrorsHandler } from './errorsHandler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [UserService, HttpUtilService, ErrorsHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
