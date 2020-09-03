import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from "./routers";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { QuestionlistComponent } from './questionlist/questionlist.component';
import { NewQuestiComponent } from './new-questi/new-questi.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MailComponent } from './mail/mail.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    QuestionlistComponent,
    NewQuestiComponent,
    MailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule
  ],
  entryComponents: [NewQuestiComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
