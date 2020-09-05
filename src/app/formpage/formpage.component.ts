import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  log(x) { console.log(x); }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
