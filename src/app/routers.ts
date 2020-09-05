import {Routes} from '@angular/router'
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {QuestionlistComponent} from "./questionlist/questionlist.component";
import {MailComponent} from "./mail/mail.component";
import {FormpageComponent} from "./formpage/formpage.component";
import {TodosComponent} from "./todos/todos.component";
import { EcoreComponent} from "./ecore/ecore.component";


export const appRoutes : Routes=[
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'questionlist',component:QuestionlistComponent},
  {path:'mail',component:MailComponent},
  {path:'formpage',component:FormpageComponent},
  {path:'todos',component:TodosComponent},
  {path:'ecore',component:EcoreComponent},
  {path:'',redirectTo:'/register',pathMatch:'full'}
];
