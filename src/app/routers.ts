import {Routes} from '@angular/router'
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {QuestionlistComponent} from "./questionlist/questionlist.component";
import {MailComponent} from "./mail/mail.component";


export const appRoutes : Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'questionlist',component:QuestionlistComponent},
  {path:'mail',component:MailComponent},
  {path:'',redirectTo:'/register',pathMatch:'full'}

];
