import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  setLang: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  changeLang() {
  }
}
